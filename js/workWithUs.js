

document.addEventListener("DOMContentLoaded", () => {
  const dir = document.documentElement.getAttribute("dir") || "ltr";
  const isArabic = dir === "rtl";

  const genderOptions = document.querySelectorAll(".gender-option");
  const form = document.getElementById("applyForJob");
  const phoneInput = form.querySelector("#phone");

  // ✅ Restrict phone input to numbers only
  phoneInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, ""); // remove all non-digits
  });

  // ✅ Gender selection
  genderOptions.forEach((option) => {
    option.addEventListener("click", () => {
      genderOptions.forEach((opt) => opt.classList.remove("active"));
      option.classList.add("active");
      option.querySelector("input").checked = true;
    });
  });

  // ✅ Form submit
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const address = form.address.value.trim();
    const birthday = form.birthday.value.trim();
    const nationality = form.nationality.value;
    const job = form.job.value;
    const gender = form.querySelector('input[name="gender"]:checked');

    // ✅ Validation
    if (!name || !phone || !address || !birthday || !nationality || !job || !gender) {
      Swal.fire({
        icon: "warning",
        title: isArabic ? "يرجى تعبئة جميع الحقول المطلوبة" : "Please fill all required fields",
        confirmButtonText: isArabic ? "حسنًا" : "OK",
        confirmButtonColor: "#d33",
      });
      return;
    }

    if (!/^\d{8,15}$/.test(phone)) { // basic phone check
      Swal.fire({
        icon: "error",
        title: isArabic ? "رقم الهاتف غير صالح" : "Invalid phone number",
        text: isArabic
          ? "يرجى إدخال رقم هاتف صحيح بدون رموز أو أحرف."
          : "Please enter a valid phone number without symbols or letters.",
        confirmButtonText: isArabic ? "حسنًا" : "OK",
        confirmButtonColor: "#d33",
      });
      return;
    }

    try {
      // Simulated submission (replace with fetch later)
      await new Promise((res) => setTimeout(res, 1000));

      Swal.fire({
        icon: "success",
        title: isArabic ? "تم إرسال الطلب بنجاح 🎉" : "Form submitted successfully 🎉",
        text: isArabic ? "سنتواصل معك قريبًا." : "We’ll contact you soon.",
        confirmButtonText: isArabic ? "موافق" : "OK",
        confirmButtonColor: "#3085d6",
      });

      form.reset();
      genderOptions.forEach(opt => opt.classList.remove("active"));
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: isArabic ? "حدث خطأ!" : "An error occurred!",
        text: isArabic
          ? "يرجى المحاولة لاحقًا."
          : "Please try again later.",
        confirmButtonText: isArabic ? "موافق" : "OK",
        confirmButtonColor: "#d33",
      });
    }
  });
});
