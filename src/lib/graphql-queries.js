import { gql } from 'graphql-request';

export const authorsQuery = gql`
	query GetAuthors {
		authors {
			name
			intro
			poste
			tags
			bio
			slug
			picture {
				url
			}
			location
		}
	}
`;

export const projectsQuery = gql`
	query GetProjects {
		projects {
			name
			slug
			description
			image {
				url
			}
		}
	}
`;

export const projectQuery = gql`
	query GetProject($slug: String!) {
		project(where: { slug: $slug }) {
			name
			slug
			description
			brief
			role
			details
			tags
			demo
			sourceCode
			image {
				url
			}
		}
	}
`;

export const postsQuery = gql`
	query GetPosts {
		posts {
			title
			slug
			date
			content
			tags
			authors {
				name
			}
		}
	}
`;

export const postQuery = gql`
	query GetPost($slug: String!) {
		post(where: { slug: $slug }) {
			title
			slug
			date
			content
			tags
			authors {
				name
			}
		}
	}
`;

