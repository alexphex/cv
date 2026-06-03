// content/data.ts
export const CV_DATA = {
  name: "Alexei Verdes",
  role: "WordPress Developer",
  email: "alex_webdev@yahoo.com",
  linkedin: "https://www.linkedin.com/in/alex-v-webdev/",
  github: "https://www.github.com/alexphex",
  profile: "Self-taught WordPress Developer with a professional background in logistics and client-facing operations. Over the past few years, I have focused on learning WordPress and WooCommerce development, building custom themes, plugins, and business-focused functionality using PHP and JavaScript. My projects are self-directed and developed from scratch, giving me hands-on experience with WordPress architecture, WooCommerce customization, and modern development workflows. I am looking to start my professional career as a WordPress Developer, bringing both technical skills and real-world business experience while continuing to grow through commercial projects and team collaboration.",  skills: [
  { category: "WordPress", items: "Custom Theme Development, Custom Post Types & Taxonomies, Hooks & Filters, Template Hierarchy, Customizer API" },
  { category: "Php / JS", items: "OOP PHP, WordPress Coding Standards, Secure Data Handling, Vanilla JavaScript (ES6+), AJAX, Gutenberg Block Development" },
  { category: "WooCommerce", items: "Custom Product & Checkout Fields, Order Meta, Checkout Customization, Email Templates, HPOS Compatibility" },
  { category: "REST API", items: "Custom Endpoints, Authentication, Data Validation & Sanitization, REST API Integrations" },
  { category: "Dev Tools", items: "Git, GitHub, DDEV, SCSS, npm, PHP_CodeSniffer (WPCS)" }
  ],
  projectGroups: [
      {
      title: "Agency Theme  —  Custom WordPress Theme",
      description: "**Built from scratch: CPT 'project' + taxonomy 'service_type'; archive, single, taxonomy templates; ACF fields with esc_html() / esc_url() output; **Native Gutenberg block 'Project Hero' with InspectorControls; Customizer section with get_theme_mod(); dual nav menus.",
      links: [
        { name: "agency-theme", url: "https://github.com/alexphex/agency-theme.git" }
      ]
    },
    {
      title: "Smart Lead Manager  —  WordPress Plugin ",
      description: "**OOP architecture: Singleton loader (spl_autoload_register); CPT 'agency_lead' with custom admin columns & status filter; **Secure REST endpoint — full sanitize/nonce chain; Action Scheduler → wp_remote_post() webhook; HTML email notifications via wp_mail().",
      links: [
        { name: "smart-lead-manager", url: "https://github.com/alexphex/lead-manager.git" }
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
  languages: ["English — B1", "Roumanian — Native", "French — Fluently"]
};