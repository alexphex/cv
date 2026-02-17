// content/data.ts
export const CV_DATA = {
  name: "Alexei Verdes",
  role: "WordPress Developer | React & Gutenberg | Custom Blocks",
  email: "alex_webdev@yahoo.com",
  linkedin: "https://www.linkedin.com/in/alex-v-webdev/",
  github: "https://www.github.com/alexphex",
  profile: "WordPress Developer focused on custom theme development and Gutenberg integration using React. I build and maintain websites and WooCommerce stores, transitioning from classic templates to custom block-based structures. Experience includes creating Gutenberg blocks, extending WordPress functionality through the REST API, and integrating third-party services. I use Docker for local environments and Git for version control, following a structured approach to development and deployment.",  skills: [
  { category: "WordPress Development", items: "Gutenberg Block development (React), Custom Themes, WooCommerce customization, Child Themes, ACF" },
  { category: "Languages & Core", items: "PHP, JavaScript (ES6+), React (hooks/components), HTML5, CSS3/SCSS" },
  { category: "WordPress API", items: "REST API integration, Actions, Filters, WP_Query, AJAX" },
  { category: "Tools", items: "Docker, Docker Compose, Git, GitHub, VS Code, NPM" }
  ],
  projectGroups: [
    {
      title: "Gutenberg & React development",
      description: "Development of custom Gutenberg blocks using React and WordPress Block API. Integration of blocks for specific content layouts and editorial workflows.",
      links: [
        { name: "lead-conversion-block", url: "https://github.com/alexphex/lead-conversion-block.git" } 
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
    },
    {
        title: "Local wp dev",
        description: "Development environment using Docker, MariaDB, and Adminer.",
        links: [{ name: "WP-Dev-with-Docker", url: "https://github.com/alexphex/docker-wp-woo.git" }]
    }
  ],
  languages: ["English — Professional", "Roumanian — Native", "French — Fluently"]
};