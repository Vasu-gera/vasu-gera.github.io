export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Personal Build', value: 'personal' },
                    { title: 'Hackathon Project', value: 'hackathon' },
                ],
            },
        },
        { name: 'shortDescription', title: 'Short Description', type: 'text' },
        { name: 'longDescription', title: 'Long Description', type: 'text' },
        { name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } },
        { name: 'techStack', title: 'Tech Stack', type: 'array', of: [{ type: 'string' }] },
        { name: 'githubLink', title: 'GitHub Link', type: 'url' },
    ],
}
