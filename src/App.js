import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import PasswordReset from "./components/ForgotPassword/PasswordReset";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AddArticle from "./components/UserDashboard/Article/AddArticles";
import AllArticles from "./components/UserDashboard/Article/AllArticles";
import EditArticle from "./components/UserDashboard/Article/EditArticle";
import AddInvoice from "./components/UserDashboard/Invoice/AddInvoice";
import AllInvoices from "./components/UserDashboard/Invoice/AllInvoices";
import EditInvoice from "./components/UserDashboard/Invoice/EditInvoice";
import AllExpenses from "./components/UserDashboard/Expense/AllExpenses";
import AddExpense from "./components/UserDashboard/Expense/AddExpenses";
import EditExpense from "./components/UserDashboard/Expense/EditExpense";
import AllSuppliers from "./components/UserDashboard/Supplier/AllSuppliers";
import AddSupplier from "./components/UserDashboard/Supplier/AddSuppliers";
import EditSupplier from "./components/UserDashboard/Supplier/EditSupplier";
import AllContacts from "./components/UserDashboard/Contact/AllContacts";
import AddContact from "./components/UserDashboard/Contact/AddContacts";
import EditContact from "./components/UserDashboard/Contact/EditContact";
import AllMessages from "./components/AdminDashboard/messages/AllMesaages";
import Reponse from "./components/AdminDashboard/messages/Reponse";
import AllGerants from "./components/AdminDashboard/Users/AllGerants";
import AddMessage from "./components/UserDashboard/Messages/addMessage";
import AllReponses from "./components/UserDashboard/Reponses/AllReponses";
import Mail from "./components/AdminDashboard/messages/Mail";






const App = () => {


    return (
        <>
            <BrowserRouter>
            <Route path="/" exact component={Landing} />

                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />

                <Route path="/dashboard" exact component={dashboard} />
                <Route path="/admin" exact component={AdminDashboard} />
                
                <Route exact path="/reset-password"  component={ForgotPassword} />
                <Route path="/reset-password/:token" component={PasswordReset} />

                <Route path='/add' component={AddInvoice} />
                <Route path='/all' component={AllInvoices} />
                <Route path='/edit/:id' component={EditInvoice} />

                <Route path='/all-articles' component={AllArticles} />
                <Route path='/add-article' component={AddArticle} />
                <Route path='/edit-article/:id' component={EditArticle} />

                
                <Route path='/all-expenses' component={AllExpenses} />
                <Route path='/add-expense' component={AddExpense} />
                <Route path='/edit-expense/:id' component={EditExpense} />

                <Route path='/all-suppliers' component={AllSuppliers} />
                <Route path='/add-supplier' component={AddSupplier} />
                <Route path='/edit-supplier/:id' component={EditSupplier} />

                <Route path='/all-contacts' component={AllContacts} />
                <Route path='/add-contact' component={AddContact} />
                <Route path='/edit-contact/:id' component={EditContact} />

                <Route path='/all-messages' component={AllMessages} />
                <Route path='/add-message' component={AddMessage} />

                <Route path='/add-reponse' component={Reponse} />
                <Route path='/add-mail' component={Mail} />

                <Route path='/all-reponses' component={AllReponses} />




                <Route path='/all-users' component={AllGerants} />






            </BrowserRouter>

        </>

    )
}


export default App; 