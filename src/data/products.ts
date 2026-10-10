export type Product = {
  name: string;
  slug: string;
  categorySlug: string;
  categoryName: string;
  image: string;
  description: string;
  applications?: string[];
  features?: string[];
  types?: string[];
  featured?: boolean;
};

export type ProductCategory = {
  name: string;
  slug: string;
  summary: string;
  products: Product[];
};

const img = (file: string) => `/assets/products/${file}`;

export const categories: ProductCategory[] = [
  {
    name: "PQC Materials",
    slug: "pqc-materials",
    summary:
      "Core pavement materials for concrete roads, airport runways, bridges, and infrastructure slabs.",
    products: [
      {
        name: "LDPE / Separation Membrane Sheet",
        slug: "ldpe-separation-membrane-sheet",
        categorySlug: "pqc-materials",
        categoryName: "PQC Materials",
        image: img("ldpe-sheet-sepration-membrane.png"),
        description:
          "High-quality LDPE membrane sheets used beneath PQC roads for separation, moisture control, and reduced friction between layers.",
        applications: ["Roads", "Highways", "Airport Runways"],
        featured: true,
      },
      {
        name: "Dowel Bar Sleeve / Cap",
        slug: "dowel-bar-sleeve-cap",
        categorySlug: "pqc-materials",
        categoryName: "PQC Materials",
        image: img("dowel-bar-cap.png"),
        description:
          "High-quality virgin plastic dowel sleeves designed for load transfer systems in concrete pavements.",
        applications: ["PQC Roads", "Concrete Pavements", "Airport Runways"],
      },
      {
        name: "Backer Rod",
        slug: "backer-rod",
        categorySlug: "pqc-materials",
        categoryName: "PQC Materials",
        image: img("backer-rod.png"),
        description:
          "Closed-cell foam backer rods used in pavement joints before sealant application.",
        applications: ["Expansion Joints", "Construction Joints", "PQC Roads"],
      },
      {
        name: "De-Bonding Strip",
        slug: "de-bonding-strip",
        categorySlug: "pqc-materials",
        categoryName: "PQC Materials",
        image: img("debonding-strip.png"),
        description:
          "Premium XLPE foam strips used to prevent unwanted bonding of sealants.",
        applications: ["Road Joints", "Expansion Joints", "Bridge Joints"],
      },
      {
        name: "Expansion Joint Board",
        slug: "expansion-joint-board",
        categorySlug: "pqc-materials",
        categoryName: "PQC Materials",
        image: img("expansion-joint-board.png"),
        description:
          "Durable expansion joint filler boards designed to absorb structural movement.",
        applications: ["Roads", "Bridges", "Industrial Floors"],
      },
      {
        name: "Polypropylene Fibre (PP Fibre)",
        slug: "polypropylene-fibre-pp-fibre",
        categorySlug: "pqc-materials",
        categoryName: "PQC Materials",
        image: img("pp-fibre.png"),
        description:
          "Micro reinforcement fibres used to reduce shrinkage cracking and improve concrete performance.",
        applications: ["PQC", "Industrial Flooring", "Concrete Structures"],
      },
    ],
  },
  {
    name: "Joint Sealing Solutions",
    slug: "joint-sealing-solutions",
    summary:
      "Sealants, primers, and bonding systems for long-lasting joints and repair work.",
    products: [
      {
        name: "Polysulphide Sealant",
        slug: "polysulphide-sealant",
        categorySlug: "joint-sealing-solutions",
        categoryName: "Joint Sealing Solutions",
        image: img("polysulphide-sealant.png"),
        description:
          "Professional sealant system for road joints, runway joints, bridge decks, and construction joints.",
        features: ["Gun Grade", "Pour Grade", "Self Leveling"],
        applications: ["Road Joints", "Runways", "Bridge Decks"],
      },
      {
        name: "Primer",
        slug: "primer",
        categorySlug: "joint-sealing-solutions",
        categoryName: "Joint Sealing Solutions",
        image: img("primer.png"),
        description:
          "Primer systems used to improve sealant adhesion across joint sealing applications.",
        types: ["Polysulphide Primer", "PU Primer", "Epoxy Primer"],
        applications: ["Improves sealant adhesion"],
      },
      {
        name: "Epoxy Bonding Agent",
        slug: "epoxy-bonding-agent",
        categorySlug: "joint-sealing-solutions",
        categoryName: "Joint Sealing Solutions",
        image: img("crack-repair.png"),
        description:
          "Bonding agent for concrete repairs, joining old and new concrete, and structural repair applications.",
        applications: [
          "Concrete Repairs",
          "Bonding Old & New Concrete",
          "Structural Repairs",
        ],
      },
    ],
  },
  {
    name: "Surface Finishing Equipment",
    slug: "surface-finishing-equipment",
    summary:
      "Concrete finishing equipment for leveling, smoothing, texturing, and compacting freshly placed concrete.",
    products: [
      {
        name: "Texturing Brush",
        slug: "texturing-brush",
        categorySlug: "surface-finishing-equipment",
        categoryName: "Surface Finishing Equipment",
        image: img("texturing-brush.png"),
        description:
          "Used for creating skid-resistant textured surfaces on concrete roads.",
      },
      {
        name: "Bull Floater",
        slug: "bull-floater",
        categorySlug: "surface-finishing-equipment",
        categoryName: "Surface Finishing Equipment",
        image: img("bull-floater.png"),
        description: "Used to level and smooth freshly placed concrete.",
      },
      {
        name: "Power Trowel",
        slug: "power-trowel",
        categorySlug: "surface-finishing-equipment",
        categoryName: "Surface Finishing Equipment",
        image: img("power-floater-trowel.png"),
        description:
          "Professional concrete finishing equipment for achieving smooth and durable concrete surfaces.",
      },
      {
        name: "Screed Vibrator",
        slug: "screed-vibrator",
        categorySlug: "surface-finishing-equipment",
        categoryName: "Surface Finishing Equipment",
        image: img("screed-vibrator.png"),
        description:
          "Used for compacting and leveling freshly poured concrete surfaces.",
      },
    ],
  },
  {
    name: "Road Construction Tools",
    slug: "road-construction-tools",
    summary:
      "Construction tools and accessories for PQC alignment, groove cutting, curing, and joint preparation.",
    products: [
      {
        name: "Diamond Groove Cutting Blade",
        slug: "diamond-groove-cutting-blade",
        categorySlug: "road-construction-tools",
        categoryName: "Road Construction Tools",
        image: img("groove-cutting-blade.jpg"),
        description:
          "Heavy-duty diamond blades for concrete groove cutting and expansion joint creation.",
      },
      {
        name: "Groove Cutting Machine",
        slug: "groove-cutting-machine",
        categorySlug: "road-construction-tools",
        categoryName: "Road Construction Tools",
        image: img("groove-cutting-machine.png"),
        description:
          "Professional machine used for cutting grooves and joints in concrete pavements.",
      },
      {
        name: "Sealant Gun",
        slug: "sealant-gun",
        categorySlug: "road-construction-tools",
        categoryName: "Road Construction Tools",
        image: img("sealant-gun.png"),
        description:
          "Industrial-grade sealant application gun for construction joints.",
      },
      {
        name: "Peg Rod, Holder & Sensor Rod",
        slug: "peg-rod-holder-sensor-rod",
        categorySlug: "road-construction-tools",
        categoryName: "Road Construction Tools",
        image: img("peg-rod-set.png"),
        description: "Precision alignment tools used in PQC road construction.",
      },
      {
        name: "Cable Reel / Wire Reel Stand",
        slug: "cable-reel-wire-reel-stand",
        categorySlug: "road-construction-tools",
        categoryName: "Road Construction Tools",
        image: img("winch-machine.png"),
        description:
          "Heavy-duty reel stand used in road construction operations.",
      },
      {
        name: "Backer Rod Roller",
        slug: "backer-rod-roller",
        categorySlug: "road-construction-tools",
        categoryName: "Road Construction Tools",
        image: img("backer-rod-roller.png"),
        description:
          "Specialized installation tool for proper backer rod placement.",
      },
      {
        name: "Hessian Cloth / Gunny Bag",
        slug: "hessian-cloth-gunny-bag",
        categorySlug: "road-construction-tools",
        categoryName: "Road Construction Tools",
        image: img("hessian-cloth.png"),
        description:
          "Used for curing and moisture retention of concrete surfaces.",
      },
      {
        name: "Curing Compound",
        slug: "curing-compound",
        categorySlug: "road-construction-tools",
        categoryName: "Road Construction Tools",
        image: img("curing-compound.png"),
        description:
          "Liquid membrane-forming compound used to retain moisture and improve concrete curing.",
      },
    ],
  },
];

export const products = categories.flatMap((category) => category.products);
export const featuredProduct = products.find((product) => product.featured) ?? products[0];

export const whatsappNumber = "918766576249";
export const phoneNumbers = ["8766576249", "9422705486"];
export const email = "bafna.techinfra@gmail.com";

export function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function productInquiryMessage(product: Product) {
  return `Hello BAFNA TECHINFRA, I am interested in ${product.name}. Please share product details and availability.`;
}

export function categoryInquiryMessage(category: ProductCategory) {
  return `Hello BAFNA TECHINFRA, I am looking for ${category.name}. Please share product details and availability.`;
}
