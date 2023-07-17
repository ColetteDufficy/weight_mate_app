use weight_mate;
db.dropDatabase();

db.programmes.insertMany([
    {
        programme_name: "Light Cardio",
        exercise_name: ["Slow Jog", "Double Under"]

    },
    {
        programme_name: "Warm up",
        exercise_name: ["Standing Hip Circles", "Side Leg Raises"]

    },
]);