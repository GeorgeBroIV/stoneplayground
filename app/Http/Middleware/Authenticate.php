<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  Request  $request
     * @return Response
     * @noinspection PhpInconsistentReturnPointsInspection
     */
    protected function redirect(Request $request): Response
    {
        if (! $request->expectsJson()) {
            return Inertia::render('Welcome');
        }
    }
}
