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
import {FixedLayout} from '@vkontakte/vkui'

class Rating extends React.Component {
	constructor(props) {
		 super();
		 this.N = 8;
		 this.M = 20;
		 this.props = props;
		 this.state = {place: 0, our_place: 100000000, table: []};
		 this.changePlace(0);

		 console.log(this.props);
		 this.getUserInfo = this.getUserInfo.bind(this);
		 this.renderRating = this.renderRating.bind(this);
		 this.getRatingTable = this.getRatingTable.bind(this);
		 this.changePlace = this.changePlace.bind(this);
		 this.goHome = this.goHome.bind(this);
	}

	async getUserInfo() {
		let response = await fetch(SERVER_URL + 'user?' + new URLSearchParams({token: this.props.token}));
		return await response.json();
	}

	async getRatingTable(start, end) {
		console.log('start ' + start + ' end ' + end);
		var response = await fetch(SERVER_URL + 'rating?' + new URLSearchParams({'n': start, 'm': end, 'token': this.props.token}));
		var json = await response.json();
		console.log('getRatingTable');
		console.log(json);
		for(var i = 0; i < json.rating.length; i += 1) {
			json.rating[i]['place'] = start + i + 1;
		}
		console.log('places..')
		console.log(json.rating)
		return json.rating;
	}

	renderRating(place, table) {
		console.log('renderRating');
		console.log(place);
		console.log(table);
		return (
			<CardGrid>
				{table.map(entry => {
					return <Card size='l' mode={{0: "shadow", 1: "tint"}[place != entry['place']]}>
						<Div style={{"float": "left"}}>{entry['place']}е</Div>
						<Div style={{"float": "left"}}>{entry['name']}</Div>
						<Div style={{"float": "right"}}>{entry['avg_score'].toFixed(2)}</Div>
					</Card>}
				)}
			</CardGrid>
		);
	}

	async changePlace(delta) {
		console.log('changePlace ' + delta);
		var info = await this.getUserInfo();
		var our_place = info['place'];
		var place = Math.max(0, this.state.place + delta);
		var table = await this.getRatingTable(place, place + this.N - 1);
		console.log('table ' + table);
		this.setState({table: table, our_place: our_place, place: place});
		console.log(this)
	}

	async goHome() {
		var info = await this.getUserInfo();
		var our_place = info.user.place;
		var place = Math.max(0, our_place - this.N / 2);
		var table = await this.getRatingTable(place, place + this.N - 1);
		this.setState({table: table, our_place: our_place, place: place});
		console.log(this)
	}

  render() {
		console.log('rating_render')
		return (
		<Panel id={this.props.id}>
				<PanelHeader>Рейтинг</PanelHeader>
				{/*{fetchedUser &&
				<Group title="User Data Fetched with VK Bridge">
					<Cell
						before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
						description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
					>
						{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
					</Cell>/* Chat containers </Group>}*/}
				{this.renderRating(this.state.place, this.state.table)}
				<FixedLayout vertical="bottom">
					<Div style={{display: 'flex'}}>
						 <Button size="l" stretched style={{ marginRight: 8 }}
										before={<Icon16Up/>} onClick={() => {this.changePlace(-1)}}></Button>
						 <Button size="l" stretched style={{ marginRight: 8 }} mode="secondary"
										before={<Icon20HomeOutline/>} onClick={this.goHome}>Мое место</Button>
						 <Button size="l" stretched style={{ marginRight: 8 }}
										before={<Icon16Down/>} onClick={() => {this.changePlace(1)}}></Button>
					</Div>
				</FixedLayout>
			</Panel>);
		}
}

Rating.propTypes = {
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
};

export default Rating;
