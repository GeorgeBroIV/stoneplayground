<template>
	<div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
		<div v-if="canLogin" class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
			<inertia-link v-if="$page.props.user" href="/home" class="text-sm text-gray-700 underline">
				Home
			</inertia-link>

			<template v-else>
				<inertia-link :href="route('login')" class="text-sm text-gray-700 underline">
					Log in
				</inertia-link>

				<inertia-link v-if="canRegister" :href="route('register')" class="ml-4 text-sm text-gray-700 underline">
					Register
				</inertia-link>
			</template>
		</div>

				<div>
					<!-- Body -->
					<div class="p-6 sm:px-20 bg-white border-b border-gray-200">
						<div align="center">
							<jet-application-logo class="inline-flex" />
						</div>
						<div align="center" class="mt-4 text-2xl middle">
							<h1>{{ title }}</h1>
						</div>
						<div align="center">{{ description }}</div>
					</div>
				</div>

				<TheFooter />
		</div>

</template>

<script>
import JetApplicationLogo from '@/Jetstream/ApplicationLogo'
import TheFooter from '@/Components/Layout/TheFooter'

export default {
	components: {
		JetApplicationLogo,
		TheFooter,
	},
	props: {
		status: Number,
		canLogin: Boolean,
		canRegister: Boolean,
		laravelVersion: String,
		phpVersion: String,
	},
	computed: {
		title() {
			return {
				503: '503: Service Unavailable',
				500: '500: Server Error',
				404: '404: Page Not Found',
				403: '403: Forbidden',
			}[this.status]
		},
		description() {
			return {
				503: 'Sorry, we are doing some maintenance. Please check back soon.',
				500: 'Whoops, something went wrong on our servers.',
				404: 'Sorry, the page you are looking for could not be found.',
				403: 'Sorry, you are forbidden from accessing this page.',
			}[this.status]
		},
	},
}
</script>