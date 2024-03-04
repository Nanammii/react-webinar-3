import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function List({list, onDeleteItem, onSelectItem, isModal, onAddCard}) {
  return (
    <div className='List'>{
      list.map(item =>
        <div key={item.code} className='List-item'>
          {isModal
            ? <Item item={item} onDelete={onDeleteItem} onSelect={onSelectItem} isModal/>
            : <Item item={item} onDelete={onDeleteItem} onSelect={onSelectItem} onAddCard={onAddCard}/>
          }
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onDeleteItem: PropTypes.func,
  onSelectItem: PropTypes.func,
  isModal: PropTypes.bool,
};

List.defaultProps = {
  onDeleteItem: () => {
  },
  onSelectItem: () => {
  },
}

export default React.memo(List);
