// GROQ queries for Sanity CMS

// Query for the Featured Blog Post
export const featuredPostQuery = `
  *[_type == "post" && status == "published" && featured == true] | order(publishedAt desc)[0] {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    excerpt,
    publishedAt,
    readingTime,
    author->{
      name,
      image
    },
    categories[]->{
      title
    }
  }
`;

// Query for Paginated Latest Blogs (excluding the featured one)
export const latestPostsQuery = `
  *[_type == "post" && status == "published" && _id != $featuredId] | order(publishedAt desc)[$start...$end] {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    excerpt,
    publishedAt,
    readingTime,
    categories[]->{
      title
    }
  }
`;

// Query for a single post by slug
export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug && status == "published"][0] {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    excerpt,
    body,
    publishedAt,
    readingTime,
    metaTitle,
    author->{
      name,
      image,
      bio
    },
    categories[]->{
      title
    },
    tags
  }
`;

// Query for all slugs to generate static paths/sitemap
export const allPostSlugsQuery = `
  *[_type == "post" && status == "published"] {
    "slug": slug.current,
    publishedAt
  }
`;

// Query for related posts based on categories
export const relatedPostsQuery = `
  *[_type == "post" && status == "published" && _id != $currentPostId && count((categories[]->title)[@ in $categories]) > 0] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    excerpt,
    publishedAt,
    readingTime,
    categories[]->{
      title
    }
  }
`;

// Query for all categories (for filter UI)
export const allCategoriesQuery = `
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "count": count(*[_type == "post" && status == "published" && references(^._id)])
  }
`;
