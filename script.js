    let emailType = "";

    function showSection(id) {
      ["notes", "email", "snippets"].forEach((sec) => {
        document.getElementById(sec).classList.toggle("hidden", sec !== id);
      });
    }

    function showToast() {
      const toast = document.getElementById("copyToast");
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 1200);
    }

    function copyText(id) {
      const text = document.getElementById(id);
      text.select();
      document.execCommand("copy");
      showToast();
    }

    function setEmailType(type) {
      emailType = type;
      document.getElementById("driverBtn").classList.toggle("active", type === "driver");
      document.getElementById("riderBtn").classList.toggle("active", type === "rider");
    }

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("copy-btn") && e.target.dataset.snippet) {
        const text = e.target.dataset.snippet;
        navigator.clipboard.writeText(text);
        e.target.classList.add("copy-flash");
        setTimeout(() => e.target.classList.remove("copy-flash"), 300);
        showToast();
      }
    });

    function generateEmail() {
      const body = document.getElementById("emailBody").value.trim();
      if (!emailType) return showToast("Select type first");

      const greeting =
        emailType === "driver"
          ? "Hello {driver name},\n\nI hope this message finds you well and that your driving experience with Lyft has been going smoothly. We truly appreciate the time and effort you invest in supporting our community every day."
          : "Hi {rider name},\n\nI hope you’re doing well and enjoying your recent rides with Lyft. We truly appreciate having you as part of our community and value your trust in choosing us for your transportation needs.";

      const closing =
        emailType === "driver"
          ? "Thank you for your continued partnership and commitment to providing safe, reliable rides to our passengers. Your dedication helps make Lyft a platform drivers and riders can always rely on.\n\nWarm regards,\n\nLyft Support Team"
          : "Thank you for being a valued member of the Lyft family. We’re always here to make sure your experience remains smooth, enjoyable, and dependable.\n\nKind regards,\n\nLyft Rider Support Team";

      const fullEmail = `${greeting}\n\n${body}\n\n${closing}`;

      const finalEmailBox = document.getElementById("finalEmail");
      const fullEmailTextarea = document.getElementById("fullEmail");

      fullEmailTextarea.value = fullEmail;
      finalEmailBox.classList.remove("hidden");

      fullEmailTextarea.select();
      document.execCommand("copy");
      showToast();
    }
