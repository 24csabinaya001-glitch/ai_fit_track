const generateWorkoutRecommendation = async (age, fitnessGoal, experience) => {
  const recommendations = {
    weight_loss:
      'Start with 30 minutes of brisk walking or light cardio 5 days per week, plus 2-3 days of simple strength training. Increase the intensity gradually.',
    muscle_gain:
      'Follow strength training 3-4 days per week with exercises such as squats, push-ups, rows, and lunges. Focus on progressive improvement and adequate rest.',
    general_fitness:
      'Aim for 30-45 minutes of mixed cardio and strength training 4-5 days per week. Include warm-up, cool-down, and regular rest days.',
  };

  const goal = String(fitnessGoal || '').toLowerCase();

  return recommendations[goal] ||
    'Start with 30 minutes of moderate exercise 4-5 days per week, combining cardio and basic strength exercises. Increase gradually according to your fitness level.';
};

const generateFitnessInsights = async (
  totalWorkouts,
  averageDuration,
  totalCaloriesBurned
) => {
  return `You completed ${totalWorkouts || 0} workouts with an average duration of ${
    averageDuration || 0
  } minutes and approximately ${totalCaloriesBurned || 0} calories burned. Keep exercising consistently and gradually improve your workout duration and intensity.`;
};

module.exports = {
  generateWorkoutRecommendation,
  generateFitnessInsights,
};