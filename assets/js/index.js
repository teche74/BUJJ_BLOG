const hour = new Date().getHours();
    const greeting = document.getElementById("greeting");
    if (hour < 12) greeting.textContent = "🌞 Good Morning, Learner!";
    else if (hour < 17) greeting.textContent = "🌤️ Good Afternoon, Learner!";
    else greeting.textContent = "🌙 Good Evening, Learner!";

    const quotes = [
      "Knowledge is power. Learning is your superpower.",
      "The beautiful thing about learning is that no one can take it away from you.",
      "Curiosity is the wick in the candle of learning.",
      "Every expert was once a beginner.",
      "Code. Learn. Repeat."
    ];
    const quoteBox = document.getElementById("quoteBox");
    quoteBox.textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;