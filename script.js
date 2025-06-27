var form = document.getElementById("level")
alert(form)

form.addEventListener("submit", function(even) 
{
    const vigor = document.getElementById("vigor_level")
    const mind = document.getElementById("mind_level")
    const endurance = document.getElementById("endurance_level")
    const strengh = document.getElementById("strengh_level")
    const dexterity = document.getElementById("dexterity_level")
    const intelligence = document.getElementById("intelligence_level")
    const faith = document.getElementById("faith_level")
    const arcane = document.getElementById("arcane_level")

    const vigor_wanted = document.getElementById("vigor_level_wanted")
    const mind_wanted = document.getElementById("mind_level_wanted")
    const endurance_wanted = document.getElementById("endurance_level_wanted")
    const strengh_wanted = document.getElementById("strengh_level_wanted")
    const dexterity_wanted = document.getElementById("dexterity_level_wanted")
    const intelligence_wanted = document.getElementById("intelligence_level_wanted")
    const faith_wanted = document.getElementById("faith_level_wanted")
    const arcane_wanted = document.getElementById("arcane_level_wanted")

    alert("ça marche");
    var somme_stat = vigor+mind+endurance+strengh+dexterity+intelligence+faith+arcane
    alert("somme stat",somme_stat)
    var somme_stat_wanted = vigor_wanted+mind_wanted+endurance_wanted+strengh_wanted+dexterity_wanted+intelligence_wanted+faith_wanted+arcane_wanted
    alert("niveau",somme_stat_wanted);
    var rune_cost = ((x+0.1)*((niveau+81)^2))+1
    alert("rune cost",rune_cost);
})