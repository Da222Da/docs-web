import React, { useState } from "react";
import DescribingUI from "./components/describing-ui/";
import AddInterractivity from "./components/add-interractivity/";

function App() {
	const [activeTab, setActiveTab] = useState('addInterractivity');
	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
		tabPane();
	}
	const tabPane = function () {
		if (activeTab === 'describingTheUi') {
			return (
				<div className="tab__pane">
					<DescribingUI />
				</div>
			);
		} else if (activeTab === 'addInterractivity') {
			return (
				<div className="tab__pane">
					<AddInterractivity />
				</div>
			);
		}
	}

	return (
		<>
			<div className="tab">
				<div className="tab__header">
					<span className={"tab__header-item " + (activeTab == 'describingTheUi' ? 'active' : '')} onClick={() => { toggle('describingTheUi'); }} >描述视图</span>
					<span className={"tab__header-item " + (activeTab == 'addInterractivity' ? 'active' : '')} onClick={() => { toggle('addInterractivity'); }}>添加交互</span>
				</div>
				<div className="tab__content">
					{
						tabPane()
					}
				</div>
			</div>
		</>
	);
}


export default App;
