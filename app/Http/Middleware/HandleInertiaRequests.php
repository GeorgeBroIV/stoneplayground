<?php
    
    namespace App\Http\Middleware;

    use Illuminate\Http\Request;
    use Illuminate\Support\Arr;
    use Illuminate\Support\Facades\Gate;
    use Illuminate\Support\Facades\Session;
    use Inertia\Middleware;
    use Laravel\Fortify\Features;
    use Laravel\Jetstream\Jetstream;
    
class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';
        
    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }
        
    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'jetstream' => function () use ($request) {
                return [
                    'canCreateTeams' => $request->user() &&
                        Jetstream::hasTeamFeatures() &&
                        Gate::forUser($request->user())->check('create', Jetstream::newTeamModel()),
                    'canManageTwoFactorAuthentication' => Features::canManageTwoFactorAuthentication(),
                    'canUpdatePassword' => Features::enabled(Features::updatePasswords()),
                    'canUpdateProfileInformation' => Features::canUpdateProfileInformation(),
                    'flash' => $request->session()->get('flash', []),
                    'hasAccountDeletionFeatures' => Jetstream::hasAccountDeletionFeatures(),
                    'hasApiFeatures' => Jetstream::hasApiFeatures(),
                    'hasTeamFeatures' => Jetstream::hasTeamFeatures(),
                    'hasTermsAndPrivacyPolicyFeature' => Jetstream::hasTermsAndPrivacyPolicyFeature(),
                    'managesProfilePhotos' => Jetstream::managesProfilePhotos(),
                ];
            },
            'user' => function () use ($request) {
                // If no authenticated user, return null
                if (! $request->user()) {
                    return;
                }
                
                // If Team is enabled, return current team
                if (Jetstream::hasTeamFeatures() && $request->user()) {
                    $request->user()->currentTeam;
                }
                
                // Identify the User Model fields that are to be excluded
                $except = [
                    'email_verified_at',
                    'updated_at'
                ];
                
                // Build the User information (less the excluded fields)
                $userData = Arr::except($request->user()->toArray(), $except);
                $allTeams = array_filter(
                    ['all_teams' => Jetstream::hasTeamFeatures() ? $request->user()->allTeams() : null,]
                );
                $twoFactorEnabled = ['two_factor_enabled' => ! is_null($request->user()->two_factor_secret),];
                $user = array_merge($userData, $allTeams, $twoFactorEnabled);
                
                return $user;
            },
            'errorBags' => function () {
                return collect(optional(Session::get('errors'))->getBags() ?: [])->mapWithKeys(function ($bag, $key) {
                    return [$key => $bag->messages()];
                })->all();
            },
        ]);
    }
}
