import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View, Epic, Tabbar, TabbarItem, Panel, PanelHeader, Spinner } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon28ChatsOutline from '@vkontakte/icons/dist/28/chats_outline';
import Icon28ListOutline from '@vkontakte/icons/dist/28/list_outline';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';

import Home from './panels/Home';
import Rating from './panels/Rating';
import Settings from './panels/Settings';
import SERVER_URL from './panels/Params'

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
			activeStory: 'chat',
			token: "not-obtained",
		};
		this.renderHome = this.renderHome.bind(this);
		this.renderRating = this.renderRating.bind(this);
		this.renderSettings = this.renderSettings.bind(this);
		this.onStoryChange = this.onStoryChange.bind(this);
		this.parseQueryString = this.parseQueryString.bind(this);
		this.obtainToken = this.obtainToken.bind(this);
	}

	parseQueryString = (string) => {
        return string.slice(1).split('&')
            .map((queryParam) => {
                let kvp = queryParam.split('=');
                return {key: kvp[0], value: kvp[1]}
            })
            .reduce((query, kvp) => {
                query[kvp.key] = kvp.value;
                return query
            }, {})
    };


	componentDidMount() {
		this.obtainToken();
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

  onStoryChange(e) {
    this.setState({ activeStory: e.currentTarget.dataset.story });
  }

	async obtainToken() {
		const urlParams = window.location.search;
		let req_params = {'data': urlParams};
		//console.log("req_params " + req_params);
		req_params = JSON.stringify(req_params);
		var result = await fetch(SERVER_URL + 'token',
					{
						method: 'POST',
						body: req_params,
						headers: {
							'Content-Type': 'application/json'
						}
					});
		var json = await result.json()
		this.setState({token: json['token']});
		console.log('!!!!!!!!!!!!TOKEN!!!!!!!!!!!!!!!!');
		console.log(json['token']);
	}

	renderHome() {
		if (this.state.token != 'not-obtained') {
			return <Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} token={this.state.token}/>
		} else {
			return <Panel id="home">
						<Spinner size="large" style={{ marginTop: 50 }} />
						</Panel>;
		}
	}

	renderRating() {
		if (this.state.token != 'not-obtained') {
			return <Rating id="rating" fetchedUser={this.state.fetchedUser} go={this.go} token={this.state.token}/>
		} else {
			return <Panel id="rating"></Panel>
		}
	}

	renderSettings() {
		if (this.state.token != 'not-obtained') {
			return <Settings id="settings" fetchedUser={this.state.fetchedUser} go={this.go} token={this.state.token}/>
		} else {
			return <Panel id="settings"></Panel>
		}
	}

	render() {
		return (
			<Epic activeStory={this.state.activeStory} tabbar={
        <Tabbar>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'chat'}
            data-story="chat"
            text="Чат"
          ><Icon28ChatsOutline /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'rating-view'}
            data-story="rating-view"
            text="Рейтинг"
          ><Icon28ListOutline /></TabbarItem>
					<TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'settings-view'}
            data-story="settings-view"
            text="Настройки"
          ><Icon24Settings /></TabbarItem>
				</Tabbar>}>
			<View id="chat" activePanel={this.state.activePanel}>
				{this.renderHome()}
			</View>
			<View id="rating-view" activePanel="rating">
				{this.renderRating()}
			</View>
			<View id="settings-view" activePanel="settings">
				{this.renderSettings()}
			</View>
		</Epic>
		);
	}
}

export default App;
