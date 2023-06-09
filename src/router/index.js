import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../components/Dashboard/Dashboard.vue'
import SignIn from '../components/SignIn/SignIn.vue';
import ResetPassword from '../components/SignIn/ForgotPassword.vue';
import SignUp from '../components/SignIn/SignUp.vue';
import Accounts from '../components/Accounts/Accounts.vue';
import Transactions from '../components/Transactions/Transactions.vue';
import Transfer from '../components/Transfer/Transfer.vue';
import AccountManagement from '../components/AccountManagement/AccountManagement.vue';
import NewAccount from '../components/AccountManagement/NewAccount.vue';
import EditAccount from '../components/AccountManagement/EditAccount.vue';
import TransactionManagement from '../components/TransactionManagement/TransactionManagement.vue';
import UserManagement from '../components/UserManagement/UserManagement.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Dashboard },
    { path: '/login', component: SignIn },
    { path: '/signup', component: SignUp },
    { path: '/resetpassword', component: ResetPassword },
    { path: '/accounts', component: Accounts},
    { path: '/transactions', component: Transactions},
    { path: '/transfer', component: Transfer},
    { path: '/accountmanagement', component: AccountManagement},
    { path: '/accountmanagement/newaccount', component: NewAccount},
    { path: '/accountmanagement/editaccount/:id', component: EditAccount, props: true},
    { path: '/transactionmanagement', component: TransactionManagement},
    { path: '/usermanagement', component: UserManagement},
  ]
})

export default router