import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import {Card, CardGrid} from '@vkontakte/vkui'

class Home extends React.Component {
	constructor(props) {
		 super();
		 this.props = props;
		 this.addVkInit = this.addVkInit.bind(this);
		 this.addVkWidget = this.addVkWidget.bind(this);
	}

	addVkInit() {
		let script = document.createElement("script");

    script.text = "VK.init({apiId: 7472129});";
    script.defer = true;

    document.body.appendChild(script);
	}

	addVkWidget() {
		let script = document.createElement("script");

		script.text = 'VK.Widgets.Auth("vk_auth", {"authUrl":"/app"});';
		script.defer = true;

		document.body.appendChild(script);
	}

	componentDidMount () {
		this.addVkInit();
		this.addVkWidget();
}

	render() {
		return <Panel id={this.props.id}>
						<PanelHeader left={<Avatar src={require("../img/communicabio.svg")}/>}>Communicabio</PanelHeader>

						<CardGrid>
							<Card size="l">
								2 предложения о Communicabio
							</Card>

							<Card size="l">
								Вкусное длинное описание
							</Card>
						</CardGrid>
						<div id="vk_auth"></div>
					</Panel>
	}
}

export default Home;
