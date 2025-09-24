(function () {
  async function loadEmbed() {
    const containers = document.querySelectorAll("[data-src]");
    containers.forEach(async container => {
      const src = container.getAttribute("data-src");
      if (!src) return;

      try {
        // Proxy server fetch
        const proxyUrl = "https://YOUR-PROXY-URL.netlify.app/?url=" + encodeURIComponent(src);
        const res = await fetch(proxyUrl);
        const html = await res.text();
        container.innerHTML = html;
      } catch (err) {
        container.innerHTML = "<p style='color:red'>Failed to load content.</p>";
        console.error("Embed error:", err);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadEmbed);
  } else {
    loadEmbed();
  }
})();
