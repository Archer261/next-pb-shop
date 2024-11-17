import { defineType } from 'sanity'

export default defineType({
    name: 'page',
    title: 'Pages',
    type: 'document',
    fields: [
        {
            name: 'pageId',
            title: 'Page Identifier',
            type: 'string',
            description: 'Unique identifier for the page (e.g., "privacy-policy", "terms", "about")',
            validation: Rule => Rule.required()
        },
        {
            name: 'title',
            title: 'Page Title',
            type: 'string',
            description: 'Main title of the page',
            validation: Rule => Rule.required()
        },
        {
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            description: 'SEO meta description for the page',
            validation: Rule => Rule.max(160).warning('Meta descriptions should be under 160 characters')
        },
        {
            name: 'sections',
            title: 'Content Sections',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'sectionId',
                            title: 'Section ID',
                            type: 'string',
                            description: 'Unique identifier for this section'
                        },
                        {
                            name: 'heading',
                            title: 'Section Heading',
                            type: 'string'
                        },
                        {
                            name: 'content',
                            title: 'Content',
                            type: 'array',
                            of: [
                                {
                                    type: 'block',
                                    styles: [
                                        { title: 'Normal', value: 'normal' },
                                        { title: 'H2', value: 'h2' },
                                        { title: 'H3', value: 'h3' },
                                        { title: 'Quote', value: 'blockquote' }
                                    ],
                                    marks: {
                                        decorators: [
                                            { title: 'Strong', value: 'strong' },
                                            { title: 'Emphasis', value: 'em' }
                                        ],
                                        annotations: [
                                            {
                                                name: 'link',
                                                type: 'object',
                                                title: 'Link',
                                                fields: [
                                                    {
                                                        name: 'href',
                                                        type: 'url',
                                                        title: 'URL'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'seo',
            title: 'SEO Settings',
            type: 'object',
            fields: [
                {
                    name: 'keywords',
                    title: 'Keywords',
                    type: 'array',
                    of: [{ type: 'string' }]
                },
                {
                    name: 'ogImage',
                    title: 'Open Graph Image',
                    type: 'image',
                    description: 'Image for social media sharing'
                }
            ]
        },
        {
            name: 'lastUpdated',
            title: 'Last Updated',
            type: 'datetime',
            readOnly: true
        }
    ]
})