import React, { useState } from "react";
import DescribingUI from "./components/describing-ui/";
import AddInterractivity from "./components/add-interractivity/";
import ManagingState from "./components/manage-state/";

function App() {
	const [activeTab, setActiveTab] = useState('managingState');
	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
		tabPane();
	}
	const tabHeader = [
		{ sign: "describingTheUi", text: '描述视图' },
		{ sign: "addInterractivity", text: '添加交互' },
		{ sign: "managingState", text: '管理状态' },
	];
	const tabPane = function () {
		function activePane() {
			switch (activeTab) {
				case 'describingTheUi':
					return <DescribingUI />;
				case 'addInterractivity':
					return <AddInterractivity />;
				case 'managingState':
					return <ManagingState />;
				default:
					break;
			}
		}
		return (<div className="tab__pane">
			{activePane()}
		</div>)
	}
	return (
		<>
			<a href="https://react.dev/learn" target="_blank">React 官网文档</a>
			<div className="tab">
				<div className="tab__header">
					{tabHeader.map(item => <span
						className={"tab__header-item " + (activeTab == item.sign ? 'active' : '')}
						onClick={() => { toggle(item.sign); }}
						key={item.sign}
					>
						{item.text}
					</span>)
					}
				</div>
				<div className="tab__content"> {tabPane()} </div>
			</div>
		</>
	);
}


export default App;
