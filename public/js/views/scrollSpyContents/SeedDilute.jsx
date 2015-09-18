var _ = require('lodash');
var React = require('react');
var Reflux = require('reflux');

var storyScenarios = require('models/storyScenarios');

var ScrollSpyContentsMixin = require('views/scrollSpy/ScrollSpyContentsMixin');

var SCROLLSPY_PROPS = {
  id: 'scenario-seed-dilute',
  name: 'Investors Dilute'
}

module.exports = React.createClass({
  mixins: [ScrollSpyContentsMixin],

  onScrollSpyFocus: function() {
    actions.chart.selectMeasure('percentages');
    actions.round.setScenario(storyScenarios.rounds.seed);
    actions.chart.selectRound(storyScenarios.rounds.seed);
    storyScenarios.actions.makeSeedNoOptions();
  },

  getInitialState() {
    return {
      scrollSpy: SCROLLSPY_PROPS
    };
  },

  render() {
    return (
      <div id={SCROLLSPY_PROPS.id}>
        <h1 className={this.state.scrollSpy.isFocused ? 'focus' : ''}>Investors Dilute</h1>
        <p>
          The prototype was a hit and you've convinced investors to give you seed money.  Here is our first encounter
          with <b>dilution</b>.</p>
        <p>
          Your investors assign a value to your company:
          the <span className="highlight-round-valuation"><strong>pre-money</strong></span> valuation. <span className="highlight-round-money">Their percentage stake</span> is
          how much they put in relative to the pre-money valuation.
        </p>
        <p>
          Dilution happens because investors get shares created out of thin air.
          They increase the size of the pie, making your original shares a smaller piece of a larger pie.
        </p>
        <div className="panel panel-info side-note">
          <div className="panel-body">
            Not all shares are created equal. Investors are generally given <strong>preferred stock</strong> (shown here
            with green bars), while employees and founders are generally given <strong>common stock</strong> (shown here
            with red/brown bars). The distinction becomes important in exit events -- as we will see at the end of our
            journey, the pie will not be split evenly.
          </div>
        </div>
      </div>
    );
  }
});