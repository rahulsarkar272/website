// const poojaSchedule = [
//     { time: "04:30", name: "Mangala Aarti", description: "Early morning darshan" },
//     { time: "06:00", name: "Mailam", description: "Changing Lord's clothes" },
//     { time: "06:45", name: "Abakasha", description: "Morning rituals including brushing of teeth, bath etc." },
//     { time: "07:00", name: "Besha Darshan", description: "Darshan in morning attire" },
//     { time: "08:00", name: "Gopal Ballabh", description: "Offering of fruits and milk" },
//     { time: "10:00", name: "Sakala Dhupa", description: "Main breakfast offering" },
//     { time: "11:30", name: "Madhyanha Dhupa", description: "Midday Bhog" },
//     { time: "13:30", name: "Pahuda", description: "Rest time for the deities" },
//     { time: "16:00", name: "Sandhya Aarti", description: "Evening prayers and rituals" },
//     { time: "19:00", name: "Sandhya Dhupa", description: "Evening food offering" },
//     { time: "21:00", name: "Badasinghar Besha", description: "Night decoration and dressing" },
//     { time: "21:30", name: "Pahuda", description: "Final rest (temple closing)" }
//   ];

  const poojaSchedule = [
    { time: "04:30", name: "Mangala Aarti",  description: "Early morning darshan 🌅" },
    { time: "06:00", name: "Mailam",  description: "Changing Lord's clothes 👕" },
    { time: "06:45", name: "Abakasha",  description: "Morning rituals like brushing & bath 🛁" },
    { time: "07:00", name: "Besha Darshan",  description: "Darshan in morning attire 🙏" },
    { time: "08:00", name: "Gopal Ballabh",  description: "Offering of fruits and milk 🥛🍌" },
    { time: "10:00", name: "Sakala Dhupa",  description: "Main breakfast offering 🍱" },
    { time: "11:30", name: "Madhyanha Dhupa",  description: "Midday Bhog 🍲" },
    { time: "13:30", name: "Pahuda",  description: "Rest time for the deities 😴" },
    { time: "16:00", name: "Sandhya Aarti",  description: "Evening prayers and rituals 🕯️" },
    { time: "19:00", name: "Sandhya Dhupa",  description: "Evening food offering 🍛" },
    { time: "21:00", name: "Badasinghar Besha",  description: "Night decoration and dressing 👑" },
    { time: "21:30", name: "Pahuda",  description: "Final rest temple closing 🌙" }
  ];
  // Convert time string to minutes
  function toMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
  }

  function getCurrentPooja() {
    const now = new Date();
    const currentIST = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const currentMinutes = currentIST.getHours() * 60 + currentIST.getMinutes();

    let current = null;
    let next = null;

    for (let i = 0; i < poojaSchedule.length; i++) {
      const startTime = toMinutes(poojaSchedule[i].time);
      const endTime = (i < poojaSchedule.length - 1) ? toMinutes(poojaSchedule[i + 1].time) : 24 * 60;

      if (currentMinutes >= startTime && currentMinutes < endTime) {
        current = poojaSchedule[i];
        next = poojaSchedule[i + 1] || poojaSchedule[0];
        break;
      }

      if (currentMinutes < toMinutes(poojaSchedule[0].time)) {
        current = null;
        next = poojaSchedule[0];
        break;
      }
    }

    const currentPoojaText = current 
      ? `🕉️ <strong>Current Pooja:</strong> ${current.name} (${current.description})`
      : "🙏 No pooja currently. The temple may be closed.";

    const nextPoojaText = next
      ? `🔜 <strong>Next Pooja:</strong> ${next.time} - ${next.name} (${next.description})`
      : "✅ No more poojas for today.";

    document.getElementById("current-pooja").innerHTML = currentPoojaText +' '+nextPoojaText;
    
  }

  getCurrentPooja();
  setInterval(getCurrentPooja, 60000); // update every minute

  function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }

  // Handle header background on scroll
  const header = document.querySelector('.header_section');
  const scrollThreshold = 100;

  function handleHeaderScroll() {
    if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll(); // Initial check

  // Back to Top Button
  const backToTopButton = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  });