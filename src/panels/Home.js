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
import './Home.css'
import SERVER_URL from './Params'
import ReactDOM from 'react-dom'
import {FixedLayout} from '@vkontakte/vkui'
import { Tooltip} from '@vkontakte/vkui';
import { PanelSpinner, ScreenSpinner, Spinner } from '@vkontakte/vkui';

var node_before_alert = null;

class Example extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		return <p>some text</p>
	}
}

class Home extends React.Component {
	constructor(props) {
		 super();
		 console.log('home-init');
		 this.state = {popout: null, history: [], disabled: false, token: null};
		 this.props = props
		 console.log(this.props)
		 this.create_alert = this.create_alert.bind(this);
		 this.prepare_alert = this.prepare_alert.bind(this);
		 //this.add_chat_message = this.add_chat_message.bind(this);
		 this.get_reply_to = this.get_reply_to.bind(this);
		 this.handle_send_message = this.handle_send_message.bind(this);
	 	 this.rollback_dialog = this.rollback_dialog.bind(this);
	 	 this.remove_alert = this.remove_alert.bind(this);
		 this.message2Cell = this.message2Cell.bind(this);
		 this.onHandleFormChange = this.onHandleFormChange.bind(this);
		 this.onHandleFormSubmit = this.onHandleFormSubmit.bind(this);
		 this.get_new_dialog = this.get_new_dialog.bind(this);
		 this.get_score = this.get_score.bind(this);
		 this.get_chat_history = this.get_chat_history.bind(this);
		 this.isTooltipClosed = this.isTooltipClosed.bind(this);
		 this.closeTooltip = this.closeTooltip.bind(this);
		 this.create_feedback_panel = this.create_feedback_panel.bind(this);
		 this.renderFeedbackPanel = this.renderFeedbackPanel.bind(this);

	 	 this.get_chat_history().then(history => {
			 if (history.length == 0) {
				 this.get_new_dialog().then(history => {this.setState({history: history})});
		 	 } else {
				 	this.setState({history: history});
			 }
		});
	}

	async get_chat_history() {
		if (this.props.token === "not-obtained") {
			return []
		}
		console.log('get---user ' + this.props.token)
		var json = await fetch(SERVER_URL + 'user?' + new URLSearchParams({token: this.props.token}));
		var formatted_list = []
		json = await json.json();
		console.log(json)
		var last_dialog = json.user.last_dialog;
		console.log(last_dialog);
		if (last_dialog == null) {
			return [];
		}
		for (var i = 0; i < last_dialog.length; i += 1) {
			formatted_list.push({'text': last_dialog[i], 'actor': i % 2})
		}
		console.log('last_dialog ' + formatted_list);
		return formatted_list
	}

	async get_new_dialog() {
		console.log("get_new_dialog ");
		const token = this.props.token;
		if (token == 'not-obtained') {
			return []
		}
		var response = await fetch(SERVER_URL + 'start_dialog', {method: 'POST',
											body: JSON.stringify({'token': token})});
		var json = await response.json();
		var text = json['first_message']
		var chat_history = [{'actor': 0, 'text': text}];
		localStorage.setItem('chat_history', JSON.stringify(chat_history));
		return chat_history;
	}

	async get_score(history) {
		const token = this.props.token;
		var response = await fetch(SERVER_URL + 'finish_dialog', {method: 'POST',
																									body: JSON.stringify({
																										'token': token
																									}),
																									headers: {
																										'Content-Type': 'application/json'
																									}})
		console.log("response")
		console.log(response.ok)
		console.log(response.status)
		if (!response.ok) {
				this.remove_alert(1);
				return null;
		}
		var json = await response.json();
		console.log('get_score ' + json)
		return json;
	}

	async get_reply_to(msg) {
		var history = this.state.history;
		history.push({'text': msg, 'actor': 1});
		console.log(history);
		this.setState({history: history, disabled: true});

		fetch(
			SERVER_URL + 'reply',
			{
				method: 'POST',
				body: JSON.stringify(
					{
						'token': this.props.token,
						'message': msg
					}
				),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		).then(result => {
			this.get_chat_history().then(
				history => this.setState({history: history, disabled: false})
			);
		});
		console.log(this.state);
	}

	handle_send_message() {
		return;
		this.add_chat_message(this.state.user_message, 1);
		this.get_reply_to("");
	}

 	async rollback_dialog() {
		// send request to server
		this.setState({disabled: true})
		var response = await fetch(SERVER_URL + 'rollback',
													{method: 'POST',
													 body: JSON.stringify({
														'token': this.props.token
													}),
													headers: {
														'Content-Type': 'application/json'
													}});
		var chat_history = await this.get_chat_history();
		this.setState({history: chat_history, disabled: false});
	}

	remove_alert(flag) {
		console.log('remove alert');
		if (flag) {
			this.get_new_dialog().then(history => {this.setState({popout: null, history: history})});
		} else {
			this.setState({popout: null});
		}
		//get_new_dialog().then(history => {this.setState({history: history})});
	}

	renderMessage(message) {
		console.log("renderMessage " + JSON.stringify(message));
		if (message['actor'] == 0) {
			return <Card mode="shadow" size='l'>{this.message2Cell(message)}</Card>
		}
		if (message['mistakes'].length == 0) {
			return <Card mode="tint" size='l'>{this.message2Cell(message)}</Card>
		}
		console.log(message['mistakes']);
		var text = "";
		message['mistakes'].forEach((item, i) => {
				text += '«' + item['word'] + '» портит показатель «' + item['metric'] + '»\n';
		});
		console.log(text);
		// this.setState({ tooltip: this.state.tooltip + 1})
		var element =  <Tooltip
											text={text}
											isShown={this.state.tooltip == message['ind']}
							 				onClose={() => this.setState({tooltip: this.state.tooltip + 1})}
											offsetX={10}
					 					>
											<Cell><Card mode="tint" size='l'>{this.message2Cell(message)}</Card></Cell>
										</Tooltip>
		console.log(element);

		return element;

	}

	renderFeedbackPanel() {
		return <Panel id={this.props.id}>
								<Div id="chat-parent">
										{this.history.map(message =>
											this.renderMessage(message))}
								</Div>
								<Div style={{height: "50px"}}></Div>

								<FixedLayout vertical="bottom">
									 <Button size="xl" mode="secondary" onClick={() => this.remove_alert(1)}>Все понятно</Button>
								</FixedLayout>
					</Panel>

	}

	create_feedback_panel() {
		var scores = this.scores;
		var history = this.state.history;
		console.log('create_feedback_panel');
		console.log(history);
		console.log(scores);
		this.history = this.state.history;
		let ind = 0;
		let ind2 = 0;
		let hint_count = 0;
		for(var i = 0; i < this.history.length; i += 1) {
			console.log(i);
			if (this.history[i]['actor'] == 0) {this.history[i]['mistakes'] = []}
			else {
				var mistakes = [];
				this.history[i]['ind'] = ind2;
				scores.forEach(element => {
					var metric = element['metric'];
					element['mistakes'].forEach(mistake => {
						if (mistake[0] === ind) {
							mistakes.push({'metric': metric, 'word': mistake[1]});
							hint_count += 1;
						}
					})
				});
				this.history[i]['mistakes'] = mistakes;
				ind2 += mistakes.length >= 1;
				ind += 1;
			}
		}
		console.log('hint_count ' + hint_count);
		if (hint_count == 0) {
			console.log('hint_count == 0')
			this.remove_alert(1);
			return;
		}
		this.setState({popout: "feedback", tooltip: 0});
	}

	create_alert(scores, dialog_id) {
		console.log("dialog scores");
		console.log(scores);
		if (scores[0]['score'] < 0) {
				text = <p>К сожалению, у нас пока нет нормальных критериев оценки на английском. Через пару дней все изменится</p>
		} else {
			var text = <p>
									{
										scores.map(element => <p>Ваши баллы за {element['metric']}: {element['score']}<br/></p>)
									}
							 </p>
		}

		this.scores = scores;
		var alert_element = (<Alert id="end-of-dialog-alert" actionsLayout="vertical"
															 actions={[
															 {
																 title: 'Продолжить',
																 autoclose: true,
																 mode: 'default',
																 action: () => {},
															 },
														 	]}
															 	onClose={() => this.create_feedback_panel()}>

													<h2>Завершение диалога</h2>
													{text}
												</Alert>);
		const script = document.createElement("script");

    script.text = 'VK.Share.button({url: "https://communicabio.github.io/share?dialog="' + dialog_id + '},{type: "round_nocount", text: "Поделиться диалогом"})};';
    script.async = true;
    alert_element.appendChild(script);
		this.setState({popout: alert_element});
	}

 	async prepare_alert() {
		this.setState({disabled: true, popout: "loading"});
		var chat_history = await this.get_chat_history();
		this.setState({history: chat_history});
		this.get_score(chat_history).then((response) => {
			this.setState({disabled: false})
			if (response === null) {
				return;
			}
			console.log(response);
			var dialog_id = response['dialog']
			response = response['metrics']
			var dict = [{'metric': 'вежливость', 'score': (2 + 3 * response['politeness']['score']).toFixed(2), 'mistakes': response['politeness']['mistakes']},
									{'metric': 'позитивность', 'score': (2  + 3 * response['positivity']['score']).toFixed(2), 'mistakes': response['positivity']['mistakes']}];
			this.create_alert(dict, dialog_id);
		});
	}

	message2Cell(message) {
		if (message['actor'] == 0) {
			return <Cell multiline before={<Avatar src={require("../img/communicabio.svg")}/>}>
								{message['text']}
							</Cell>
		} else {
			return <Cell multiline>{message['text']}</Cell>
		}
	}

	onHandleFormChange(e) {
		this.setState({
		 user_message: e.target.value
	 });
	}

	onHandleFormSubmit(e) {
		e.preventDefault();
		const text = this.state.user_message;
		console.log(text);
		this.get_reply_to(text);
		//this.setState({user_message: ""});
		//console.log('user-message: ' + this.state.user_message);
	}

	isTooltipClosed(i) {
		var array = this.state.tooltips;
		for (var j = 0; j < array.length; j += 1) {
			if (array[j] == i) return false;
		}
		return true;
	}

	closeTooltip(i) {
		var array = this.state.tooltips;
		var repl = []
		for (var j = 0; j < array.length; j += 1) {
			if (array[j] != i) repl.push(array[j]);
		}
		if (repl.length == 0) {

		}
		this.setState({tooltips: repl});
	}

	loadigRender() {
		return <Panel id={this.props.id}>
 						<PanelHeader>Чат</PanelHeader>
						<Spinner size="large" style={{ marginTop: 50 }} />
		 				</Panel>
	}

	chatRender() {
		return <Panel id={this.props.id}>
			<PanelHeader>Чат</PanelHeader>
			{/*{fetchedUser &&
			<Group title="User Data Fetched with VK Bridge">
				<Cell
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</Cell>/* Chat containers </Group>}*/}
			<Div id="chat-parent">
					{this.state['history'].map(message =>
						<Card mode={{0: "shadow", 1: "tint"}[message['actor']]} size='l'>
							{this.message2Cell(message)}
						 </Card>
					)}
					{/*renderMessages(this.state['history'], this.state['hints'])*/}


			</Div>

			<Div style={{height: "130px"}}></Div>


			<FixedLayout vertical="bottom">
				<Div>
					<Div style={{display: 'flex'}}>
		       <Button size="l" stretched style={{ marginRight: 8 }}
					 				before={<Icon24ArrowUturnLeftOutline/>} disabled={this.state.disabled} onClick={() => this.rollback_dialog(this)}>Отмена</Button>
		       <Button size="l" stretched mode="secondary" disabled={this.state.disabled} before={<Icon24Cancel/>} onClick={this.prepare_alert}>Закончить</Button>
		     	</Div>
					<Separator/>
					<Div style={{'position': 'relative'}}>
						<Textarea style={{"float": "left", 'marginBottom': "10px", "marginRight": "10px"}} onChange={this.onHandleFormChange} defaultValue={this.state.user_message}></Textarea>
						<Button onClick={this.onHandleFormSubmit} disabled={this.state.disabled} before={<Icon24Send/>} style={{"float": "left"}}></Button>
					</Div>
				</Div>
			</FixedLayout>
		</Panel>
	}

  render() {
		console.log('home-render')
		console.log(this.props);
		//console.log(this.state.popout == null)
		/*this.history = [{'text': "dddgggg", "actor": 1, "mistakes": [{"metric": "m", "word": "w"}]}];
		return this.renderFeedbackPanel()*/

		if (this.state.popout == null) {
			return this.chatRender();
		} else {
			if (this.state.popout === "feedback") {
				return this.renderFeedbackPanel();
			}
			if (this.state.popout === "loading") {
				return this.loadigRender();
			}
			return this.state.popout;
		}
	}
}

/*Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
	token: PropTypes.string.isRequired
};*/

export default Home;
