export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        { name: 'name', title: 'Display Name', type: 'string' },
        { name: 'bio', title: 'Short Bio', type: 'text' },
        { name: 'github', title: 'GitHub URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'email', title: 'Contact Email', type: 'string' },
    ],
}
