import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import CountdownForm from 'CountdownForm';

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    const spy = expect.createSpy();
    const countdownForm = TestUtils.renderIntoDocument(
      <CountdownForm onSetCountdown={spy} />
    );
    const $el = $(ReactDOM.findDOMNode(countdownForm));

    TestUtils.Simulate.change($el.find('input')[0], { target: { value: '109' } });
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('shouldn not call onSetCountdown if invalid seconds entered', () => {
    const spy = expect.createSpy();
    const countdownForm = TestUtils.renderIntoDocument(
      <CountdownForm onSetCountdown={spy} />
    );
    const $el = $(ReactDOM.findDOMNode(countdownForm));

    TestUtils.Simulate.change($el.find('input')[0], { target: { value: 'test' } });
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
