import { categories, email, phoneNumbers, products, type Product, type ProductCategory } from "./products";

export const siteUrl = "https://www.bafnatechinfra.com";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function categoryUrl(category: ProductCategory) {
  return absoluteUrl(`/products/${category.slug}/`);
}

export function productUrl(product: Product) {
  return absoluteUrl(`/products/${product.categorySlug}/${product.slug}/`);
}

export function breadcrumbSchema(items: Array<{ name: string; url?: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

export function productSchema(product: Product) {
  return {
    "@type": "Product",
    "@id": `${productUrl(product)}#product`,
    name: product.name,
    description: product.description,
    image: absoluteUrl(product.image),
    url: productUrl(product),
    category: product.categoryName,
    brand: {
      "@type": "Brand",
      name: "BAFNA TECHINFRA",
    },
    manufacturer: {
      "@id": `${siteUrl}/#organization`,
    },
  };
}

export function categoryCollectionSchema(category: ProductCategory) {
  return {
    "@type": "CollectionPage",
    "@id": `${categoryUrl(category)}#collection`,
    name: `${category.name} | BAFNA TECHINFRA`,
    description: category.summary,
    url: categoryUrl(category),
    mainEntity: {
      "@type": "ItemList",
      name: `${category.name} products`,
      itemListElement: category.products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: productUrl(product),
        name: product.name,
      })),
    },
  };
}

export function productCatalogSchema() {
  return {
    "@type": "CollectionPage",
    "@id": `${absoluteUrl("/products/")}#catalog`,
    name: "BAFNA TECHINFRA Product Catalog",
    description:
      "PQC materials, joint sealing solutions, surface finishing equipment, and road construction tools for infrastructure projects.",
    url: absoluteUrl("/products/"),
    mainEntity: {
      "@type": "ItemList",
      name: "BAFNA TECHINFRA products",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: productUrl(product),
        name: product.name,
      })),
    },
  };
}

export function homeCatalogSchema() {
  return {
    "@type": "OfferCatalog",
    "@id": `${siteUrl}/#offer-catalog`,
    name: "BAFNA TECHINFRA Road Construction Materials Catalog",
    itemListElement: categories.map((category) => ({
      "@type": "OfferCatalog",
      name: category.name,
      url: categoryUrl(category),
      itemListElement: category.products.map((product) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: product.name,
          url: productUrl(product),
          image: absoluteUrl(product.image),
          description: product.description,
        },
      })),
    })),
  };
}

export function contactPageSchema() {
  return {
    "@type": "ContactPage",
    "@id": `${absoluteUrl("/contact/")}#contact`,
    name: "Contact BAFNA TECHINFRA",
    url: absoluteUrl("/contact/"),
    mainEntity: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "BAFNA TECHINFRA",
      email,
      telephone: phoneNumbers.map((phone) => `+91${phone}`),
    },
  };
}
