import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import List from '@vkontakte/vkui/dist/components/List/List'
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout'
import Textarea from '@vkontakte/vkui/dist/components/Textarea/Textarea'
import Card from '@vkontakte/vkui/dist/components/Card/Card'
import CardGrid from '@vkontakte/vkui/dist/components/CardGrid/CardGrid'
import Input from '@vkontakte/vkui/dist/components/Input/Input'
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator'
import Alert from '@vkontakte/vkui/dist/components/Alert/Alert'
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell'
import Icon24Send from '@vkontakte/icons/dist/24/send';
import Icon24ArrowUturnLeftOutline from '@vkontakte/icons/dist/24/arrow_uturn_left_outline';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import ReactDOM from 'react-dom'
import Icon16Up from '@vkontakte/icons/dist/16/up';
import Icon16Down from '@vkontakte/icons/dist/16/down';
import Icon20HomeOutline from '@vkontakte/icons/dist/20/home_outline';
import SERVER_URL from './Params'
import {FormLayoutGroup, Radio} from '@vkontakte/vkui'

class Settings extends React.Component {
	constructor(props) {
		 super();
		 this.props = props;
		 this.state = {lang: -1, hints: -1};

		 console.log(this.props);
		 this.getUserInfo = this.getUserInfo.bind(this);
		 this.updateLang = this.updateLang.bind(this);

		 this.getUserInfo().then(result => this.setState({lang: result['user']['lang'], hints: result['user']['hints']}));
	}

	async getUserInfo() {
		console.log("getUserInfo")
		let response = await fetch(SERVER_URL + 'user?' + new URLSearchParams({token: this.props.token}));
		console.log("getUserInfo - end");
		return await response.json();
	}

	updateLang(lang) {
		//this.setState({disabled: true})
		fetch(SERVER_URL + 'language',
													{method: 'POST',
													 body: JSON.stringify({
														'token': this.props.token,
														'lang': lang
													}),
													headers: {
														'Content-Type': 'application/json'
													}});
		this.setState({lang: lang});
		console.log(this.state.lang);
		//this.setState({disabled: false});
	}

	updateHints(hints) {
		fetch(SERVER_URL + 'hints',
													{method: 'POST',
													 body: JSON.stringify({
														'token': this.props.token,
														'hints': hints
													}),
													headers: {
														'Content-Type': 'application/json'
													}});
		this.setState({hints: hints});
		//this.setState({disabled: false});
	}

  render() {
		return (
		<Panel id={this.props.id}>
				<PanelHeader>Настройки</PanelHeader>
				<FormLayout>
					<FormLayoutGroup top="Язык диалогов">
						<Radio name="radio" value="1" description="Новые диалоги будут только на русском" checked={this.state.lang == 1} onClick={() => this.updateLang(1)}>Русский</Radio>
						<Radio name="radio" value="2" description="Новые диалоги будут только на английском" checked={this.state.lang == 2} onClick={() => this.updateLang(2)}>Английский</Radio>
						<Radio name="radio" value="3" description="Новые диалоги будут то на русском, то на английском" checked={this.state.lang == 3} onClick={() => this.updateLang(3)}>Оба</Radio>
					</FormLayoutGroup>

					<FormLayoutGroup top="Подсказки" bottom="Подсказки значительно замедляют оценку диалога.">
						<Radio name="radio1" value="1" checked={this.state.hints == 1} onClick={() => this.updateHints(1)}>Включить подсказки</Radio>
						<Radio name="radio1" value="0" checked={this.state.hints == 0} onClick={() => this.updateHints(0)}>Отлючить подсказки</Radio>
					</FormLayoutGroup>
				</FormLayout>
			</Panel>);
		}
}

export default Settings;
