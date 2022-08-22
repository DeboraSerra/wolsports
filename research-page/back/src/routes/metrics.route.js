const { Router } = require('express');
const MetricsController = require('../controllers/metrics.controller');

const router = Router();

router.route('/activity')
  .get(MetricsController.getActivity);

router.route('/activity/:gender')
  .get(MetricsController.getActivityGender);

router.route('/goal')
  .get(MetricsController.getGoals);

router.route('/goal/:gender')
  .get(MetricsController.getGoalsGender);

router.route('/gender')
  .get(MetricsController.getGenders);

router.route('/district')
  .get(MetricsController.getRA);

router.route('/type')
  .get(MetricsController.getType);

module.exports = router;
