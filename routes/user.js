const express = require('express')

const router = express.Router()


const users=[
    {
        name:'Ubaid Raza 1',
        course:'Web And App 1',
        id:1
    },
    {
        name:'Ubaid Raza 2',
        course:'Web And App 2',
        id:2
    },
    {
        name:'Ubaid Raza 3',
        course:'Web And App 3',
        id:3
    },
    {
        name:'Ubaid Raza 4',
        course:'Web And App 4',
        id:4
    },
    {
        name:'Ubaid Raza 5',
        course:'Web And App 5',
        id:5
    }
]


router.get('/', (req,res) => {
    res.status(200).send(
        {
            status:200,
            users:users
        }
    )
})


router.delete('/:id',(req,res) => {
    users.splice(req.params.id-1 , 1)
    res.status(200).send({
        status:200,
        users:users
    })
})

// Error To Be Solved
router.post('/',(req,res) => {
    // res.send( 'Post Route Called')
    // console.log(req.body);
    users.push({name:req.body.name,course:req.body.course,id:users.length+1})
    res.status(200).send({
        status:200,
        user:users[users.length-1]
    })
})


router.put('/:id' ,(req,res)=>{
    users[req.params.id-1].name=req.body.name;
    users[req.params.id-1].course=req.body.course;

    res.status(200).send({
        status:200,
        Edited:users[req.params.id-1],
        AllUsers:users
        
    })
})
// Error To Be Solved


// router.get('/:id', (req,res) => {
//     const user=users.find((data)=>data.id)
//     res.send({msg:'Get User with ID ' + user.name + user.id + 'The Query is ' + req.query.type})
// // console.log(req.query);
// })

router.get('/:id',(req,res) => {
    if(users[req.params.id-1]){
        res.status(200).send({
            status:200,
            userById: users[req.params.id-1],
            error:true
        })
    }
    else{
        res.status(500).send({
            status:500,
            msg:'User Not Found'
        })
    }
})




module.exports = router