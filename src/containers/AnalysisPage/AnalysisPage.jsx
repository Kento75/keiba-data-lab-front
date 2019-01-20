import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/** Components */
import DripTable from 'mui-drip-table';
import { AppHeader, TextBox, LoadingDialog, ResultDialog } from '../../components';

/** Actions */
import * as analysisPageAction from '../../actions/AnalysisPage/analysisPageAction';

class AnalysisPage extends Component {
  constructor(props) {
    super(props);
    /** ActionBinds */
    this.handleChangeSearchWord = this.handleChangeSearchWord.bind(this);
    this.handleEnterSearchEdit = this.handleEnterSearchEdit.bind(this);
    this.handleOnClickOkBtn = this.handleOnClickOkBtn.bind(this);
  }

  /**
   * 検索文字列変更時
   * @param {object} e Elmオブジェクト
   */
  handleChangeSearchWord(e) {
    const { analysisActionBind } = this.props;
    // 検索ボックス内の値を引数に渡す
    analysisActionBind.changeSearchWord(e.target.value);
  }

  /**
   * 検索実行時
   * @param {object} e Elmオブジェクト
   */
  handleEnterSearchEdit(e) {
    const { analysisActionBind } = this.props;
    const ENTER_KEY_CODE = 13;
    // Enterキーを押下した場合は検索実行
    if (e.keyCode === ENTER_KEY_CODE) {
      analysisActionBind.searchData();
    }
  }

  /**
   * 処理結果ダイアログ内OKボタン押下時
   */
  handleOnClickOkBtn() {
    const { analysisActionBind } = this.props;
    analysisActionBind.changeAlertMessage();
  }

  render() {
//    const {
//    } = this.props;
    return (
      <div>
        <AppHeader />
      </div>
    );
  }
}

AnalysisPage.propTypes = {
};

function mapStateToProps(state) {
  const {
  } = state.analysisPageReducer;
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    analysisActionBind: bindActionCreators(analysisPageAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnalysisPage);
