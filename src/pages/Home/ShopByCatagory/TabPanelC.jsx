

const TabPanelC = ({toyss}) => {
     
    return (
        <div>
            {
              toyss.map(d => <div>{d}</div>)
            }
        </div>
    );
};

export default TabPanelC;