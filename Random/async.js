// GET LIST OF ALL THE STUDENTS
GET /api/students
Response:
[{
    "id": 1,
    "name": "John",
    "classroomId": 75
}]
// GET COURSES FOR GIVEN A STUDENT
GET /api/courses?filter=studentId eq 1
Response:
[{
   "id": "history",
   "studentId": 1
}, {
   "id": "algebra",
   "studentId": 1
},]
// GET EVALUATION FOR EACH COURSE
GET /api/evaluation/history?filter=studentId eq 1
Response:
{
    "id" = 200, "score" = 50,
    "totalScore" = 100
}


async function getDetails(classRoomID){
    //loopthrough and check for id equivalents.
    if(id = classRoomID){
        return totalScore;
    }

    //await approach
    await Response.id


}


