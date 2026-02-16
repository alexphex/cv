// content/data.ts
export const CV_DATA = {
  name: "Alexei Verdes",
  role: "WordPress Developer | React & Gutenberg | Custom Blocks",
  email: "alex_webdev@yahoo.com",
  linkedin: "https://www.linkedin.com/in/alex-v-webdev/",
  github: "https://www.github.com/alexphex",
  profile: "Passionate WordPress / WooCommerce developer with experience in building and customizing websites and online shops. Experienced in creating projects from scratch using WordPress, Gutenberg, WooCommerce, and integrating custom plugins. Familiar with modern development processes, including Docker, Git, and local development environments.",
  skills: [
    { category: "WordPress & WooCommerce", items: "Theme customization, Child Theme, plugin integration, mini-shop development, update and maintain WordPress websites, Convert HTML Templates into functional WordPress themes" },
    { category: "PHP", items: "Actions/ Filters/ Queries/ Loop/ AJAX/ REST API" },
    { category: "Front-End", items: "HTML, CSS, JS, jQuery, React & Gutenberg" },
    { category: "Tools", items: "Docker, Docker Compose, VS Code, Git, GitHub" },
    { category: "Optional", items: "Bootstrap, Tailwind, SCSS" }
  ],
  projectGroups: [
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