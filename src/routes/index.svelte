<script context="module">
	import { gql } from 'graphql-request';
	import { client } from '$lib/graphql-client';

	export const load = async () => {

		const query = gql`
			query GetProjects {
				projects {
					name
					slug
					description
					demo
					sourceCode
					image {
						url
					}
				}
			}
		`;
		const { projects } = await client.request(query);

		return {
			props: {
				projects
			}
		};
	};
</script>

<script>
	export let projects;
</script>

<pre>{JSON.stringify(projects, null, 2)}</pre>
