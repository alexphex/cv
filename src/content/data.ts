// content/data.ts
export const CV_DATA = {
  name: "Alexei Verdes",
  role: "WordPress / WooCommerce Developer — Page Builders, Custom Development",
  email: "alex_webdev@yahoo.com",
  linkedin: "https://www.linkedin.com/in/alex-v-webdev/",
  github: "https://www.github.com/alexphex",
  profile: "Self-taught WordPress/WooCommerce Developer comfortable across the full range of client work: fast, pixel-accurate builds with Elementor, and store-side WooCommerce customization — product/checkout fields, order management, custom admin columns, email templates. Also confident with deeper custom work in PHP and JavaScript — custom themes, Gutenberg blocks — and building skills in REST API/webhook automation (n8n). Background in logistics shaped a practical, deadline-driven approach to client work. Looking to start a professional career as a WordPress/WooCommerce Developer — ready to begin with builder-based work and store setup/support, then grow toward custom development and automation.",  skills: [
  { category: "Page Builders", items: "Elementor — responsive layouts, global styles, dynamic/custom widgets, third-party plugin integration" },
  { category: "Gutenberg", items: "Custom block development (block.json, InspectorControls, dynamic rendering) — examples published on GitHub" },
  { category: "WordPress", items: "Custom Theme Development, Custom Post Types & Taxonomies, Hooks & Filters, Template Hierarchy, Customizer API" },
  { category: "WooCommerce", items: "Custom Product & Checkout Fields, Order Meta, Checkout Customization, Email Templates, HPOS Compatibility" },
  { category: "PHP / JS", items: "OOP PHP, WordPress Coding Standards, Secure Data Handling, Vanilla JavaScript (ES6+), AJAX" },
  { category: "Dev Tools", items: "Git, GitHub, DDEV, SCSS, npm" }
  ],
  projectGroups: [
      {
      title: "Agency Theme  —  Custom WordPress Theme",
      description: "**Built from scratch (no page builders) — CPT project with service_type taxonomy, archive/single templates, custom meta fields (client, year, URL) via native meta boxes with nonce validation and sanitized output. **Native Gutenberg block 'Project Hero' registered via block.json; Customizer section with get_theme_mode() for hero content, accent color, and contact info; dual nav menus (primary + footer)",
      links: [
        { name: "agency-theme", url: "https://github.com/alexphex/agency-theme.git" }
      ]
    },
    {
      title: "Lead Capture Sync (in progress)  —  WordPress Plugin (WP → n8n → CRM)",
      description: "**Custom OOP PHP plugin with Composer/PSR-4 autoloading and a layered architecture (Controller → Service → Repository) separating business logic from WordPress data operations. **Built a REST API for lead creation (with validation) and a token-authenticated callback endpoint for external services to update lead status, plus a Contact Form 7 integration using the Provider pattern for easy extension to other form plugins. **Implemented webhook-based sync to n8n/CRM with duplicate-lead detection and a status lifecycle (pending → processing → processed/failed); currently finalizing the n8n workflow and CRM integration",
      links: [
        { name: "lead-capture-sync", url: "https://github.com/alexphex/lead-capture-sync" }
      ]
    },
    {
      title: "Woo Agency Toolkit  —  WooCommerce Plugin",
      description: "**Custom product & checkout fields with validation; order meta; WC Admin column; Delivery Note in customer email; **WooCommerce admin customizations including product settings, order management, and email extensions.",
      links: [
        { name: "woo-agency-toolkit", url: "https://github.com/alexphex/woo-agency-toolkit.git" }
      ]
    },
    {
      title: "Gutenberg & React development",
      description: "Development of custom Gutenberg blocks using React and WordPress Block API. Integration of blocks for specific content layouts and editorial workflows.",
      links: [
        { name: "green-impact-calculator", url: "https://github.com/alexphex/green-impact-calculator" },
        { name: "lead-conversion-block", url: "https://github.com/alexphex/lead-conversion-block.git" },
        { name: "event-core-blocks", url: "https://github.com/alexphex/event-core-blocks.git" } 
      ]
    },
    {
      title: "WordPress themes projects",
      description: "My custom themes",
      links: [
        { name: "wp-theme-rent4u", url: "https://github.com/alexphex/wp-theme-rent4u.git" },
        { name: "generatepress-child-events", url: "https://github.com/alexphex/generatepress-child-events.git" }
      ]
    },
    {
      title: "WordPress plugins projects",
      description: "A collection of custom WordPress plugins I’ve developed to enhance site functionality.",
      links: [
        { name: "custom_notifications", url: "https://github.com/alexphex/plugin_custom_notifications.git" },
        { name: "custom_search_ajax", url: "https://github.com/alexphex/wp_plugin_custom_search_ajax.git" },
        { name: "custom-rest-api", url: "https://github.com/alexphex/plugin-custom-rest-api.git" }
      ]
    },
    {
      title: "WooCommerce plugins projects",
      description: "Lightweight WooCommerce plugins to extend functionality.",
      links: [
        { name: "product_custom_field", url: "https://github.com/alexphex/wp_plugin_woocommerce_manufacturer_field.git" },
        { name: "product_filter_ajax", url: "https://github.com/alexphex/wp-wooCommerce-ajax-filter.git" }
      ]
    },
    {
      title: "Front-End Projects",
      description: "Landing Pages & Website Templates built with HTML, CSS, and jQuery.",
      links: [
        { name: "Restaurant", url: "https://github.com/alexphex/Restaurant__template.git" },
        { name: "Lawyer", url: "https://github.com/alexphex/Lawyer__template.git" },
        { name: "Organic", url: "https://github.com/alexphex/Organic__template.git" },
        { name: "Leasing_car", url: "https://github.com/alexphex/leasing_car.git" }
      ]
    }
  ],
  languages: ["English — B1", "Roumanian — Native", "Russian — Fluently", "French — Fluently"]
};