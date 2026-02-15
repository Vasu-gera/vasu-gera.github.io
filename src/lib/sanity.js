import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize Sanity client
export const client = createClient({
    projectId: 'dje876td',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-03',
});

// Initialize image URL builder
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs from Sanity image assets
export function urlFor(source) {
    return builder.image(source);
}
