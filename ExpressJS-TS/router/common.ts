import express from 'express'
import axios from 'axios'
const router = express.Router()

// random activity
class Activity {
    name: string
    type: string
    participants: number

    constructor(name: string, type: string, participants: number) {
        this.name = name
        this.type = type
        this.participants = participants
    }

    getName() {
        return this.name
    }
    getType() {
        return this.type
    }
    getParticipants() {
        return this.participants
    }
}

router.get('/bored', function (req, res) {
    let newActivity: Activity
    
    axios.get( 'https://www.boredapi.com/api/activity')
    .then(function( response ) { // json
        let result = response.data
        newActivity = new Activity(result.activity, result.type, result.participants)
        console.log(result)
    })
    .catch(function (error) { // handle error
        console.log(error);
    })
    .then(function () { // always executed
        res.render('bored', {
            data: newActivity
        })
    })
})

export = router