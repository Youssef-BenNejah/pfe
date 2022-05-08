import axios from 'axios';

 const invoicesUrl = 'http://localhost:8000/invoices';
 const articlesUrl = 'http://localhost:8000/articles';
 const expensesUrl = 'http://localhost:8000/expenses';
 const contactsUrl = 'http://localhost:8000/contacts';
 const messagesUrl = 'http://localhost:8000/messages';
 const reponsesUrl = 'http://localhost:8000/reponses';
 const usersUrl    =  'http://localhost:8000/users';



export const getInvoices = async (id) => {
    id = id || '';
    return await axios.get(`${invoicesUrl}/${id}`);
}

export const addInvoice = async (invoice) => {
    return await axios.post(`${invoicesUrl}/add`, invoice);
}

export const deleteInvoice = async (id) => {
    return await axios.delete(`${invoicesUrl}/${id}`);
}

export const editInvoice = async (id, invoice) => {
    return await axios.put(`${invoicesUrl}/${id}`, invoice)
}


export const getArticles = async (id) => {
    id = id || '';
    return await axios.get(`${articlesUrl}/all-articles/${id}`);
}

export const addArticle = async (article) => {
    return await axios.post(`${articlesUrl}/add-article`, article);
}

export const deleteArticle = async (id) => {
    return await axios.delete(`${articlesUrl}/${id}`);
}

export const editArticle = async (id, article) => {
    return await axios.put(`${articlesUrl}/${id}`, article)
}



export const getExpenses = async (id) => {
    id = id || '';
    return await axios.get(`${expensesUrl}/all-expenses/${id}`);
}

export const addExpense = async (expense) => {
    return await axios.post(`${expensesUrl}/add-expense`, expense);
}

export const deleteExpense = async (id) => {
    return await axios.delete(`${expensesUrl}/${id}`);
}

export const editExpense = async (id, expense) => {
    return await axios.put(`${expensesUrl}/${id}`, expense)
}


export const getSuppliers = async (id) => {
    id = id || '';
    return await axios.get(`${suppliersUrl}/all-suppliers/${id}`);
}

export const addSupplier = async (supplier) => {
    return await axios.post(`${suppliersUrl}/add-supplier`, supplier);
}

export const deleteSupplier = async (id) => {
    return await axios.delete(`${suppliersUrl}/${id}`);
}

export const editSupplier = async (id, supplier) => {
    return await axios.put(`${suppliersUrl}/${id}`, supplier)
}


export const getContacts = async (id) => {
    id = id || '';
    return await axios.get(`${contactsUrl}/all-contacts/${id}`);
}

export const addContact = async (contact) => {
    return await axios.post(`${contactsUrl}/add-contact`, contact);
}

export const deleteContact = async (id) => {
    return await axios.delete(`${contactsUrl}/${id}`);
}

export const editContact = async (id, contact) => {
    return await axios.put(`${contactsUrl}/${id}`, contact)
}



export const getMessages = async (id) => {
    id = id || '';
    return await axios.get(`${messagesUrl}/all-messages/${id}`);
}

export const addMessage = async (message) => {
    return await axios.post(`${messagesUrl}/add-message`, message);
}

export const deleteMessage = async (id) => {
    return await axios.delete(`${messagesUrl}/${id}`);
}

export const editMessage = async (id, message) => {
    return await axios.put(`${messagesUrl}/${id}`, message)
}


export const getReponses = async (id) => {
    id = id || '';
    return await axios.get(`${reponsesUrl}/all-reponses/${id}`);
}

export const addReponse = async (reponse) => {
    return await axios.post(`${reponsesUrl}/add-reponse`, reponse);
}
export const addMail = async (reponse) => {
    return await axios.post(`${reponsesUrl}/add-mail`, reponse);
}


export const deleteReponse = async (id) => {
    return await axios.delete(`${reponsesUrl}/${id}`);
}

export const editReponse = async (id, reponse) => {
    return await axios.put(`${reponsesUrl}/${id}`, reponse)
}

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/all-users/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add-user`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}