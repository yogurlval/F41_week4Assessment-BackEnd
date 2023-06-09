const affirmations = [
    {
        name: "I am successful",
        id: 1
    },
    {
        name: "I am worthy of good things",
        id: 2
    },
    {
        name: "I am loved",
        id: 3
    },
    {
        name: "Come on Barbie, let's go party",
        id: 4
    }

]





module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A lifetime of happiness lies ahead of you.", "Any day above ground is a good day.", "Do not just spend time. Invest it.", "Go take a rest; you deserve it.", "Have a beautiful day."];

        let randomInd = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomInd];

        res.status(200).send(randomFortune);
    },

    getAffirmations: (req, res) =>{
        res.status(200).send(affirmations);
        
    },

    addAffirmation: (req,res) =>{
        affirmations.push(req.body)
        res.status(200).send(affirmations)
    },

    deleteAffirmation: (req,res)=>{
        let {index} = req.params
        affirmations.splice(+index,1)
        res.status(200).send(affirmations)
    }

}