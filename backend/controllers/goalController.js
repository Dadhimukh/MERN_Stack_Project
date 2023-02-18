   // @desc    Get goals
   // @route    GET /api/goals
   const getGoals = (req, res) => {
   res.status(200).json({ message: "Get goals" });
   };

   // @desc    Set goal
   // @route    SET /api/goal
   const setGoal = (req, res) => {
   res.status(200).json({ message: "Set goal" });
   };

   // @desc    Update goal
   // @route    PUT /api/goals/:id
   const updateGoal = (req, res) => {
   res.status(200).json({ message: `Update goal ${req.params.id}` });
   };

   // @desc    Delete goal
   // @route    DELETE /api/goals/:id
   const deleteGoal = (req, res) => {
   res.status(200).json({ message: `Delete goal ${req.params.id}` });
   };

   module.exports = {
   getGoals,
   setGoal,
   updateGoal,
   deleteGoal,
   };
