use weight_mate;
db.dropDatabase();

db.programmes.insertMany([
    {
        programme_name: "Light Cardio",
        exercise_name: ["Slow Jog", "Double Under"]

    }
]);