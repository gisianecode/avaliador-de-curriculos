function analyzeResume() {

    const resume = document
        .getElementById("resume")
        .value
        .toLowerCase();

    const resultDiv = document.getElementById("result");

    if(resume.trim() === ""){
        resultDiv.innerHTML =
        "<h2>⚠️ Cole um currículo para analisar.</h2>";
        return;
    }

    let score = 0;

    let strengths = [];
    let suggestions = [];

    if(resume.includes("python")){
        score += 15;
        strengths.push("Conhecimento em Python");
    }else{
        suggestions.push("Aprender Python");
    }

    if(resume.includes("html")){
        score += 10;
        strengths.push("Conhecimento em HTML");
    }

    if(resume.includes("css")){
        score += 10;
        strengths.push("Conhecimento em CSS");
    }

    if(resume.includes("javascript")){
        score += 15;
        strengths.push("Conhecimento em JavaScript");
    }else{
        suggestions.push("Aprender JavaScript");
    }

    if(resume.includes("git")){
        score += 15;
        strengths.push("Conhecimento em Git");
    }else{
        suggestions.push("Adicionar Git ao currículo");
    }

    if(
        resume.includes("github") ||
        resume.includes("projeto")
    ){
        score += 20;
        strengths.push("Possui projetos práticos");
    }else{
        suggestions.push("Criar projetos para portfólio");
    }

    if(
        resume.includes("api") ||
        resume.includes("apis")
    ){
        score += 15;
        strengths.push("Conhecimento em APIs");
    }else{
        suggestions.push("Aprender integração com APIs");
    }

    let level = "";

    if(score >= 80){
        level = "Excelente";
    }
    else if(score >= 60){
        level = "Bom";
    }
    else if(score >= 40){
        level = "Regular";
    }
    else{
        level = "Precisa Melhorar";
    }

    resultDiv.innerHTML = `
        <h2>📊 Pontuação ATS: ${score}/100</h2>

        <h3>🏆 Nível</h3>
        <p>${level}</p>

        <h3>✅ Pontos Fortes</h3>
        <ul>
            ${strengths.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <h3>📚 Sugestões de Melhoria</h3>
        <ul>
            ${suggestions.map(item => `<li>${item}</li>`).join("")}
        </ul>
    `;
}