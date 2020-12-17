import React from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../../redux/contacts';
import styles from './ContactsListItem.module.css';

const ContactsListItem = ({ name, number, deleteContact }) => {
  return (
    <li className={styles.item}>
      <p className={styles.contact}>{name}</p>
      <p className={styles.contact}>{number}</p>
      <button type="button" className={styles.btn} onClick={deleteContact}>
        X
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getContactById(state, ownProps.id);
  return { ...contact };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteContact: () => dispatch(contactsOperations.deleteContact(ownProps.id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsListItem);
