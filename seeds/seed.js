const mongoose = require("mongoose");
const Item = require("../models/item");

const placeholder = "https://via.placeholder.com/150/000000/FFFFFF/?text=No%20Image"

function seedDB() {
		const shoes = [
			{
				title: "Running Shoes",
				brand:"Nike",
				image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
				price:"37.99",
				description:"Great running shoes! Huge Savings!"
			},
			
			{
				title: "Skate Shoes",
				brand:"Vans",
				image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
				price:"26.99",
				description:"Tear it up in these brand new shoes!"
			},
			
			{
				title: "High Heels",
				brand:"Prada",
				image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
				price:"44.99",
				description:"Take to the runway with these stylish heels!"
			},
		];
	
		const shirts = [
			{
				title:"Dress Shirts",
				brand:"Eddie Bauer",
				image:"https://images.unsplash.com/photo-1549037173-e3b717902c57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
				price:"24.99",
				description:"Dress to impress for any occation!"
			},
						{
				title:"Flannel Shirts",
				brand:"Harleyville",
				image:"https://images.unsplash.com/photo-1588795904317-2f4ab1a0a852?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
				price:"18.99",
				description:"Cold? Grab a quality flannel today!"
			},
						{
				title:"Childrens Shirts",
				brand:"Ralph Lauren",
				image:"https://images.unsplash.com/photo-1560859259-fcf2b952aed8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
				price:"5.99",
				description:"Dont forget to get something for the little one."
			},
		];
		
		const watches = [
			{
				title:"Business Watch",
				brand:"Rolex",
				image:"https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
				price:"94.99",
				description:"Top class watch at a low cost, wont beat it anywhere!"
			},
						{
				title:"Pocket Watch",
				brand:"ShirtMate",
				image:"https://images.unsplash.com/photo-1493662042295-319935c83112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
				price:"47.99",
				description:"Want to class up your wardrobe? Add a pocket watch and you'll turn all the heads."
			},
						{
				title:"Casual Watch",
				brand:"Olympus",
				image:"https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
				price:"37.99",
				description:"Indoor/outdoor watch for every day use."
			},
		];
	
	
		const hats = [
			{
				title:"Winter Hat",
				brand:"BeanmyHead",
				image:"https://images.unsplash.com/photo-1579533153944-ba0bb9dc6695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
				price:"7.99",
				description:"Heep your noggin warm this winter with a great hat!"
			},
						{
				title:"Snap-back Hat",
				brand:"WeSnap",
				image:"https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
				price:"4.99",
				description:"These snap-back hats fit heads of all sizes."
			},
						{
				title:"Fitted Hat",
				brand:"FitmeOnce",
				image:"https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
				price:"22.99",
				description:"Buy one of these great fitted hats today!"
			},
		];
		
		
	
	
}
module.exports = seedDB;