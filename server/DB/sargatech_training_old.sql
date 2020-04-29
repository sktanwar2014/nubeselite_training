-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 30, 2019 at 05:31 PM
-- Server version: 5.7.25
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sargatech_training`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `about` text NOT NULL,
  `phone_main` varchar(100) DEFAULT NULL,
  `phone_second` varchar(100) DEFAULT NULL,
  `email` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `about`, `phone_main`, `phone_second`, `email`) VALUES
(1, 'I like to maintain the blogs and share the salesforce knowledge based on my experience. I maintain a blog ‘www.srinusfdc.com‘ which is very famous for the salesforce interview questions. Most of the people who want to learn salesforce from the scratch like my posts.\n\nI have started teaching upon the request of my blog ‘www.srinusfdc.com‘ followers/viewers. With my teaching most of the people successfully got jobs and they are able to shift their technology.', '080-4114 0897', '+91 7483096134', 'info@nubeselite.com');

-- --------------------------------------------------------

--
-- Table structure for table `batch`
--

CREATE TABLE `batch` (
  `id` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `batch_name` varchar(255) NOT NULL,
  `start_date` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `days` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `fees` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `batch`
--

INSERT INTO `batch` (`id`, `cid`, `title`, `batch_name`, `start_date`, `time`, `days`, `duration`, `fees`, `status`) VALUES
(1, 1, 'Salesforce Admin + Development', 'Batch 65', '2019-09-09', '9:00 – 10:00 PM IST (1st week)  8:00 – 9:00 PM IST (From 2nd week)', 'Monday - Friday', '60+ Classes', 'INR 15000', 1),
(2, 1, 'Salesforce Admin + Development', 'Batch 66', '2019-09-17', '7:15 – 8:30 AM IST', 'Monday - Friday', '60+ Classes', 'INR 15000', 1),
(3, 2, 'Salesforce Lightning', 'Batch 67', '2019-10-01', '', 'Monday - Friday', '30+ Classes', 'INR 12000', 1),
(4, 3, NULL, 'sfafsf', '2019-10-26', 'sfafda', 'ada', 'sfafdf', 'afsdf', 0),
(5, 4, NULL, '65', '2019-09-09', '9:00 – 10:00 PM IST (1st week)  8:00 – 9:00 PM IST (From 2nd week)', 'Mon-Fri', '60+ Classes', 'INR 15000', 0);

-- --------------------------------------------------------

--
-- Table structure for table `certification`
--

CREATE TABLE `certification` (
  `id` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `certification` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `certification`
--

INSERT INTO `certification` (`id`, `cid`, `certification`, `image`, `status`) VALUES
(1, 1, 'expert', 'dd', 1);

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `mid` int(11) NOT NULL,
  `about` text,
  `advantages` text,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `name`, `mid`, `about`, `advantages`, `status`) VALUES
(1, 'Administration', 1, 'A Salesforce Administrator is a business leader, deeply knowledgeable about how their company operates, intertwined in making all departments successful through process automations, and thus, integral to running a smooth & lean business.\n \nSalesforce Admins work hard to fight inefficiency and champion productivity. They create awesome tools on any device – like easy to use dashboards, intelligent workflows and apps for any project.\n \nAdmins keep Salesforce users trained and educated, solve complicated business problems and keep projects moving forward.  A Salesforce Admin delivers creative solutions – making Salesforce users happier and the business smarter!', '', 1),
(2, 'Development', 1, 'A Salesforce Developer uses programming and declarative skills to extend and customize\napplications on the Salesforce platform. \nA Platform App Builder uses declarative skills to customize applications on the Salesforce platform. Declarative means using clicks not code', '<p>\nBasics of Programming.<br />\nIntroductions to Oops Concepts.<br />\nException Handling.<br />\nWorking with Eclipse ( Force.com IDE).<br />\n Collections.<br />\nSOQL and SOSL Queries.<br />\nDML Statements.<br />\nApex Triggers.<br />\nBatch Apex Classes.<br />\nVisualforce Pages.<br />\nLightning Pages.<br />\nDynamic Apex.<br />\nTest Apex.<br />\nWeb Services.<br />\nDeployment Process.<br />\n</p>', 1),
(3, 'Lightning', 1, 'Lightning is a component-based framework for app development from Salesforce.com that is designed to simplify processes for business users, who typically do not have programming experience. Lightning features : Experience, a graphical user interface (GUI) that is optimised for speed. Lightning is completely a re-imagined Salesforce platform designed to take sales productivity to the next level. \nThe Lightning Platform delivers out-of-the-box tools and services to automate your business processes, integrate with external applications, provide responsive layouts and more. From no-code builders to pro-code tools, the Lightning Platform\'s enterprise services and metadata-driven, multi-tenant cloud architecture means that you can focus on what makes your business better from the competition.', '<p>1. Covering the topics with real time scenarios<br>\r\n2. Providing guidance to complete Admin 201 certification<br>\r\n3. Providing support for resume preparation<br>\r\n4. Clarifying interview/work related questions even after the course<br>\r\n5. Candidates can attend the course any number of times once they join for one time.<br>\r\n6. Providing recording sessions if the candidate misses any class due to power cut/ internet problem or personal work.</p>', 1),
(4, 's2', 2, 'Nam egestas lorem ex, sit amet commodo tortor faucibus a. Suspendisse commodo, turpis a dapibus fermentum, turpis ipsum rhoncus massa, sed commodo nisi lectus id ipsum. Sed nec elit vehicula, aliquam neque euismod, porttitor ex. Nam consequat iaculis maximus. Suspendisse potenti. In rutrum justo et diam egestas luctus. Mauris eu neque eget odio suscipit eleifend. Sed imperdiet ante quis felis tempor hendrerit. Curabitur eget fermentum ipsum. Sed efficitur eget velit eu vulputate. Duis tincidunt quam in erat dignissim consequat. Praesent tempus leo eu nisl fringilla interdum. Maecenas rutrum libero eget lacus bibendum tristique. Curabitur at felis lobortis, mollis ante ut, tempus elit. Morbi justo nisi, posuere sed augue id, iaculis tincidunt mi. Pellentesque sed dolor sed dui congue tempus a et felis.', '<p>1. Covering the topics with real time scenarios<br>2. Providing guidance to complete Admin 201 certification<br>3. Providing support for resume preparation<br>4. Clarifying interview/work related questions even after the course<br>5. Candidates can attend the course any number of times once they join for one time.<br>6. Providing recording sessions if the candidate misses any class due to power cut/ internet problem or personal work.</p>', 0),
(5, 'S1', 3, '', '', 0),
(6, 'S2', 3, '', '', 0),
(7, 'test', 4, 'test', 'test', 0),
(8, 'test 2', 4, 'test 2', '', 0),
(9, 'Integration', 1, 'User Interface Integration is one great way to surface various applications inside Salesforce with little redesign of each individual app. It provides your users a single point of entry into multiple applications. It requires no coding in Salesforce, which is an advantage, but then it cannot implement any custom logic.', '<p>\nIntegrating other client applications with the Force.com platform.<br />\nWeb Service integration, including both inbound and outbound to Force.com.<br />\nApex Callouts enable invoking external web services that utilize SOAP and REST Services.<br />\nImporting the WSDL into Apex or by HTTP (RESTful) Services classes.<br />\nWSDL2Apex<br />\nHTTP Services<br />\nData Integration <br />\nEnterprise Web Services WSDL<br />\nPartner Web Services WSDL<br />\nSecurity Considerations<br />\n<ul style=\"margin-left:30px;list-style-type: circle;\">\n<li>a sessionId</li>\n<li>a serverUrl</li>\n</ul>\n</p>', 1),
(10, '', 0, '', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

CREATE TABLE `faq` (
  `id` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `question` text NOT NULL,
  `answer` text NOT NULL,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faq`
--

INSERT INTO `faq` (`id`, `cid`, `question`, `answer`, `status`) VALUES
(1, 1, 'Can I just enroll in a single course? I\'m not interested in the entire Specializat', 'Nam egestas lorem ex, sit amet commodo tortor faucibus a. Suspendisse commodo, turpis a dapibus fermentum, turpis ipsum rhoncus massa, sed commodo nisi lectus id ipsum. Sed nec elit vehicula, aliquam neque euismod, porttitor ex. Nam consequat iaculis maximus.', 0),
(2, 2, 'safd', 'af', 0),
(3, 2, 'Can I just enroll in a single course? I\'m not interested in the entire Specializat', 'Nam egestas lorem ex, sit amet commodo tortor faucibus a. Suspendisse commodo, turpis a dapibus fermentum, turpis ipsum rhoncus massa, sed commodo nisi lectus id ipsum. Sed nec elit vehicula, aliquam neque euismod, porttitor ex. Nam consequat iaculis maximus.', 0),
(4, 1, 'What are the benefits if I join for Admin+Dev Course?', '1. Explaining all the topics by taking the realtime examples.\n2. Providing/sharing soft copy of the materials to follow.\n3. Suggesting the trainings to do and clarify the questions if any.\n4. Providing guidance for Admin 201/ Platform Developer – I certifications\n5. Resume preparation and guidance for the interview\n6. After the course while facing the interviews clarifying the questions through whats app/ email/phone call\n7. Suggesting the approaches to achieve the requirements once you join the job.', 1),
(5, 1, 'What are the benefits if I join for Admin Course?', '1. Explaining all the topics by taking the realtime examples.\n2. Providing/sharing soft copy of the materials to follow.\n3. Suggesting the trainings to do and clarify the questions if any.\n4. Providing guidance for Admin 201certification\n5. Resume preparation and guidance for the interview\n6. After the course while facing the interviews clarifying the questions through whats app/ email/phone call\n7. Suggesting the approaches to achieve the requirements once you join the job.', 1),
(6, 2, 'What are the benefits if I join for Dev Course? ', '1. Explaining all the topics by taking the realtime examples.\n2. Providing/sharing soft copy of the materials to follow.\n3. Suggesting the trainings to do and clarify the questions if any.\n4. Providing guidance for Platform Developer – I certifications\n5. Resume preparation and guidance for the interview\n6. After the course while facing the interviews clarifying the questions through whats app/ email/phone call', 1),
(7, 1, 'I want to do a real time project?', '1. Providing the requirements for the project which you are interested from a list.\n2. Providing the suggestions to achieve the requirements by following the best approaches.', 1),
(8, 2, 'Any support for Certifications?', '1. For Admin Course providing support for Admin 201 Certification\n2. For Development Course providing support for Platform Developer – I Certification\n3. For Admin+Development Course providing support for both Admin 201 and Platform Developer – I Certifications', 1),
(9, 2, 'I want to get the solutions to my Interview Questions?', 'You can send mail or ping in Whats App to get the questions clarified.', 1),
(10, 2, ' I have joined newly to work on Salesforce Platform, any support provided?', 'You can send a mail or ping me in whats app, suggestions will be provided to solve your requirements.\nNote: Please don’t expect to work for your requirements.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `interview`
--

CREATE TABLE `interview` (
  `id` int(11) NOT NULL,
  `sid` int(11) NOT NULL,
  `question` text NOT NULL,
  `answer` text NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `interview`
--

INSERT INTO `interview` (`id`, `sid`, `question`, `answer`, `status`) VALUES
(1, 1, '1. What is Cloud Computing ?', 'Pictorial representation of internet is Cloud.\nCloud Computing is nothing but internet computing.\nWith this approach everything can be done in internet (Using Application, Developing Application and distributing the hardware), no need of any minimum hardware requirements and no need to install any software in local system.\nCloud Computing is an approach to provide the following services -\nSAAS (Software As A Service)\nPAAS (Platform As A Service)\nIAAS (Infrastructure As A Service)', 1),
(2, 1, '2. What is Salesforce?', 'Salesforce is a company which provides a web based tool called Salesforce\nSalesforce by following the Cloud Computing approach, providing SAAS and PAAS\nSAAS: Providing Sales, Marketing and Call Center applications as a service\nPAAS: Providing Force.com platform in which we can develop Apex (Programming language similar to Core Java) and Visualforce (Mark up language similar to HTML) logic.', 1),
(3, 1, '2. What is Production?', 'We should not make coding changes in production since end-users are using the application from production environment.', 1),
(4, 1, '4. What is production url?', 'login.salesforce.com', 1),
(5, 1, '5. What is sandbox?', 'To make any changes for the exiting application we should copy all contents of the production into sandbox and make all changes after that test thoroughly and move those changes into production.\nTo create the sandbox, in production we can find one link called sandboxes. by clicking on that link we can create the sandbox by choosing type of the sandbox.', 1),
(6, 1, '6. What is sandbox url?', 'test.salesforce.com', 1),
(7, 1, '7. What are the types of Sandboxes?', 'Developer Sandbox\nDeveloper pro sandbox\nPartial data sandbox\nFull copy sandbox', 1),
(8, 1, '8. What is Developer sandbox?', '-->It copy only configuration changes from the production\n-->It won’t copy real time data\n-->We can test the configuration changes with sample data\n-->Sample data limit is 200mb\n-->Refresh time interval is one day\n-->If we refresh all the sandbox contents will be replaced with production contents', 1),
(9, 1, '9. What is developer pro sandbox?', 'Copy configuration changes\nNo real time data\nSample data limit is 1GB\nRefresh time interval one day', 1),
(10, 1, '9. What is developer pro sandbox?', 'Copy configuration changes\nNo real time data\nSample data limit is 1GB\nRefresh time interval one day', 1),
(11, 1, '10. What is partial data sandbox?', 'Copy configuration changes\nCopy certain amount of real time data\nReal time data limit is 5GB\nFor each table it can copy maximum of 10k records\nRefresh interval 5 days', 1),
(12, 2, '11. What is Full copy sandbox?', 'It is exact replica of the production\nCopy both configuration and entire real time data from the production\nRefresh time interval 29 days', 1),
(13, 2, '1. What is Track Field History?', 'While creating the object, we can enable \'Track Field History\'.\nIf, we enable \'Track Field History\' user can see \'Set History Tracking\' button under \'Custom Fields & Relationships\' section which is available on the object detail page.\nBy clicking on \'Set History Tracking\' button, we can enable tracking for the fields which ever we want.\nTo see the object history, go to object\'s record layout and add Object Name History related list to the layout.\nWhenever, user changes field value from one value to another value, it will show the history of the field in \'Object History\' related list.', 1),
(14, 2, '2. What are the Activities in Salesforce?', 'To create the Activities, while creating the object, we should check for \'Allow Activities\' check box then user can add open Activities and Activity History related lists on the Object layout.\nThere are two types of activities -\n\n1)Task: Task is nothing but work assigned to a particular person, it doesn\'t have certain time limit.\n2)Event: It has certain time limit in that time only all persons should assemble after the time limit over, event will get complete.\n- Once event or task status changed to \'Completed\' then we can see those records under Activity History Related List.', 1),
(15, 2, '3. How to Rename the tab?', 'Tab name will be decided based on the Plural Label of the custom object, to rename go to corresponding object detail page and rename the plural label.', 1),
(16, 2, '4. How to display multiple columns after clicking on the tab?', 'Click on the tab(Which should be realted to any of the custom/standard object) > Expand Force.com Quick Access Menu > Edit Columns > Move the needed fields from Available Fields to Selected Fields. > Click on Save > User should be able to see multiple columns.\n(OR)\nClick on Setup > Create > Objects > Select the corresponding object link > Under Search Layouts section > Click Edit which should be left to Object Tab > Move the needed fields from Available Fields to Selected Fields. > Click on Save > User should be able to see multiple columns.', 1),
(17, 2, '5. What is the difference between ISBLANK() AND ISNULL()?', 'ISNULL() works only for number data type fieds, if we don\'t populate with value for number fields it will return true.\nISNULL() won\'t support TEXT data type fields because text fields never become null.\nISBLANK() supports both number as well as text data types.', 1),
(18, 2, '6. What is dependent picklist?', 'In some scenario\'s, we should be able to control one of the field(Dependent field) from another field(Controlling field), example If we select Country(Controlling field) as US then City(Dependent Field) should display only US cities.\n\nWe can use checkbox data type fields also while creating dependent picklist (Note: Checkbox should be always controlling field)\nWe can use multi-select data type fields also while creating dependent picklist (Note: multi-select data type field should be always dependent field)', 1),
(19, 2, '7. What is the architecture of the salesforce', 'MVC Architecutre - Model, View , Controller\nView - It is the user interface (Apps, Tabs, Page Layouts, Fields and Record Types)\nController - Business Logic (Save, Edit, New, Cancel and Delete - upon click on these button salesforce execute some logic from controller)\nModel - It is the Database, which stores Schema (Meta-Data(Data about Data) --> Apps, Tabs, sObjects, fields, Apex Classes, Visualforce pages, etc...) and Instance (Records)', 1),
(20, 2, '8. What is the difference between 15 digit and 18 digit id in Salesforce?', 'In Salesforce, whenever user create any component (Object, field, tab etc...) or record then salesforce will generate an unique id with which user can identify the record or component.\nAfter creating the record, in the URL user can see the id of the record which is of 15 digits length.\nThrough user interface user always see 15 digit id which is Cases-Sensitive\n.\nIf the user query the existing records from the database through API (Either from Query Tool or from a program), it will always return 18 digit id which is Case-Insensitive.\nLast 3 digits of the 18 digit represents checksum of the capitalization of 15 digit id.\nBased on the first 3 digits user can identify the object of the record.\nAll the records belongs to same object will contain same firt 3 digits.', 1),
(21, 2, '9. What is Record Type?', 'For an object based on the Record Type, we can show different fields and different picklist values by assigning different page layouts for the record types and profiles.\nAfter creating the record type, on the record type detail page user can see all the picklist data type fields, user can edit the picklist and decide which values should display for this particular record type.', 1),
(22, 2, '10. What is the difference between detail page and edit page?', 'Whenever user try to create a new record or edit an existing record user can input the values for the fields, this page is nothing but edit page.\nAfter creating a new record or editing an existing record, user can see the information of the record, this page is nothing but detail page.', 1),
(23, 2, '11. What is out of box functionality? ', 'Within the sfdc standered functionality (no need to code).', 1),
(24, 2, '12. What are the type of tabs?', 'Custom tabs (create for objects)\nWeb tabs (create to display a website)\nVisual force tabs (create to display the visual force page)', 1),
(25, 2, '13. What is validation rule?', 'While creating or modifying the record based on the certain conditions we can display error messages on top of the page or below to the filed.', 1),
(26, 2, '14. There are two fields, if the user populate two field values if we combine those values uniqueness should be maintained?', 'Create a unique text field and update the field from workflow rule (use formula to update by combining two field values), after the update again all the system validations will be performed so error will be displayed.', 1),
(27, 2, '15. What are Governor Limits?', 'Since we are working in multitenant environment Salesforce is enforcing the limits for all the functionalities.\n\nHow many no of fields for an object: 500\nNo of master detail relationships for an object: 2\nNo of lookup relationship for an object: 25\nNo of rollup summery fields: 25\nHow many external ids we can enable for an object: 7 (increased from 3 to 7 in Winter-15)', 1),
(28, 2, '16. For which data type we can enable external id?', 'text, number, auto number, email.', 1),
(29, 2, '17. What is list view?', 'After clicking on the tab on the top of the page we can see views, by default we can see the value called ‘all’. If we click on ‘Go’ beside that all we can see all the records of that object. If we want we can create new views. While creating the view we can give the filter conditions so that based on the filter condition only we can see the records.', 1),
(30, 2, '18. What is Inline editing?', 'On the detail page without clicking on edit button we can edit particular field if it is not read-only.', 1),
(31, 2, '19. How to disable Inline editing?', 'To enable or disable Inline editing follow the below navigation - Setup--> Customise--> User Interface--> Enable Inline Editing', 1),
(32, 2, '20. What is Enhanced list view?', 'In list views we can modify multiple records at a time using Enhanced list views Note: To modify multiple records, all the records should belong to same record type in the list view otherwise we cannot modify.', 1),
(33, 2, '21. What is search layout?', 'Whenever we click on a tab or we click on a lookup icon or search for a record we see only one standard field by default, to enable remaining fields -\n\nTo show multiple fields for the records which display under a tab, on object detail page > under Search layouts edit tab and add required fields.\nTo show multiple fields for the records which display when we click on lookup of a field, on object detail page > under Search layouts edit Lookup Dialogs and add required fields.\nTo show multiple fields for the records which display when we search for the records, on object detail page > under Search layouts edit Search Results and add required fields.', 1),
(34, 2, '22. What is mini page layout and how to enable?', 'For lookup fields on record detail page we see a link, whenever we put cursor on that link we see a popup window which displays few fields. To control the fields visibility, on that look up field parent object page layout we see a mini page layout in that we can control.', 1),
(35, 2, '23. What is lead process?', 'To control the picklist values of the status field on the lead object we should create lead process.\r\n\r\nWithout selecting the lead process we can\'t create the record type for lead object', 1),
(36, 2, '24. What is sales process?', 'To control the picklist values of the stage field on the opportunity object we should create sales process.\r\n\r\nWithout selecting the sales process we can\'t create the record type for opportunity object', 1),
(37, 2, '25. What is Support process?', 'To control the picklist values of the status field on the case object we should create support process.\r\n\r\nWithout selecting the support process we can\'t create the record type for case object', 1),
(38, 2, '26. What is web-to-lead?', 'On lead object we can generate the HTML code by selecting lead fields and by mentioning return URL from web-to-lead option. The generated HTML code can be hosted in any of the website. Upon entering the information in those fields and clicking on submit button that information will be saved into lead object of the Salesforce.', 1),
(39, 2, '27.  What is Queue?', 'In queue we can add group of users and we can assign the objects to the Queue. After creating the queue one of the list view automatically created on the objects which are selected for the queue. We can assign this queue as the owner of the records (objects which are selected for this queue). Later users who are part of that queue can claim the ownership by navigating to list view corresponding to the queue. In that list view users who are part of the queue can select the record and click on accept button so that record ownership will be transferred from queue to accepted person.', 1),
(40, 2, '28. What is public group?', 'We can add set of random users in the public group. We can\'t assign public group as an owner of the record. In manual sharing, sharing rules and in list views we can use public group.', 1),
(41, 2, '29. What are the Assignment rules?', 'On lead and case objects we can create the Assignment rules. Whenever any record is submitted for lead/case if specified condition in the Assignment rule satisfied based on that we can decide the owner of the case/lead. Note: While submitting case/lead we should check for \'Assign using active assignment rule\' checkbox which will display under Optional section.', 1),
(42, 2, '30. What are Auto-Response Rules?', 'On lead and case objects we can create the Auto-Response Rules. Whenever any record is submitted for lead/case if specified condition in the Auto-Response Rules satisfied based on that we can decide the email format which should send as auto response.', 1),
(43, 2, '31. What are the Escalation rules?', 'On case object we can create Escalation rule. Based on the priority we can send escalation mails.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `interview_section`
--

CREATE TABLE `interview_section` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `interview_section`
--

INSERT INTO `interview_section` (`id`, `title`, `status`) VALUES
(1, 'Production and Sandbox Environments', 1),
(2, 'Configuration', 1),
(3, 'Questions on Relationships', 0),
(4, 'Users, Profiles and Permission Sets', 0),
(5, 'Import Wizard and Data Loader', 0),
(6, 'Workflows and Approvals', 0),
(7, 'Reports and Dashboards', 0);

-- --------------------------------------------------------

--
-- Table structure for table `maincourses`
--

CREATE TABLE `maincourses` (
  `id` int(11) NOT NULL,
  `course` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `maincourses`
--

INSERT INTO `maincourses` (`id`, `course`, `status`) VALUES
(1, 'Salesforce', 1),
(2, 'c2', 0),
(3, 'c3', 0),
(4, 'Test 2', 0),
(5, 'Digital Marketing', 1);

-- --------------------------------------------------------

--
-- Table structure for table `syllabus`
--

CREATE TABLE `syllabus` (
  `id` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `syllabus`
--

INSERT INTO `syllabus` (`id`, `cid`, `title`, `description`, `status`) VALUES
(1, 1, '1) Introduction to Salesforce', '<ul><li>1.1 What is Cloud Computing?</li><li>1.2 Types of Cloud Computing Services with examples</li><li>1.3 Cloud Computing Architecture</li><li>1.4 What is Salesforce?</li><li>1.5 Services provided by salesforce</li><li>1.6 What is CRM Process?</li><li>1.7 Kinds of Apps developed by Salesforce</li><li>1.8 Advantages of Salesforce</li><li>1.9 Employment opportunities with Salesforce</li></ul>', 1),
(2, 1, '2) Production and Sandbox Environments', '<ul><li>2.1 Production Environment</li>\r\n<li>2.2 Types of Sandbox Environments</li>\r\n<li>2.3 Registering with Developer Organization</li>\r\n<li>2.4 Salesforce Terminology</li></ul>', 1),
(3, 1, '3) Creating a new Application', '<ul><li>3.1 Steps to create Application<li/>\n<li>3.2 Setting up the logo for Application<li/><ul/>', 1),
(4, 1, '4) Creating an Object', '<ul><li>4.1 Steps to create the object<li/>\n<li>4.2 Difference options involved while creating the object<li/><ul/>', 1),
(5, 1, '5) Creating a Tab', '<ul><li>5.1 Steps to create the tab<li/>\n<li>5.2 Different options involve with the tab<li/><ul/>', 1),
(6, 1, '6) Creating custom fields', '<ul><li>6.1 Different Data Types involved while creating custom fields<li/>\n<li>6.2 Different options involved with custom fields<li/>\n<li>6.3 Changing the Default Currency Type<li/>\n<li>6.4 Field Dependencies<li/><ul/>', 1),
(7, 1, '7) Custom Validation Rules', '<ul><li>7.1 Steps to configure custom validations<li/>\n<li>7.2 Different formula functions involved with custom validation<li/>\n<ul/>', 1),
(8, 1, '8) Search Layouts, Inline Editing, Enhanced List Views and Record Ids', '<ul><li>8.1 Enable more columns at tab level, search results level and look up dialog Level <li/>\n<li>8.2 Working with inline editing <li/>\n<li>8.3 Working with enhanced list views <li/>\n<li>8.4 Analysing record ids of the components <li/><ul/>', 1),
(9, 1, '9) Creating Relationships', '<ul><li>9.1 Different types of realationships<li/>\n<li>9.2 Creating a junction object<li/>\n<li>9.3 Governor limit in Salesforce<li/><ul/>', 1),
(10, 10, '', '', 1),
(11, 10, 'Digital Marketing', 'SEO\n    On Site SEO\n     Off Site SEO', 1),
(12, 10, '', '', 1),
(13, 10, '', '', 1),
(14, 10, '', '', 1),
(15, 10, '', '', 1),
(16, 10, '', '', 1),
(17, 10, '', '', 1),
(18, 1, '10) Page Layouts and Mini Page Layouts', '<ul>\n<li>10.1 Different options available in page layout <li/>\n<li>10.2 Steps to configure mini page layout <li/>\n<li>10.3 Adding Related Lists to Layout <li/>\n<ul/>', 1),
(19, 1, '11) Record Types', '<ul>\n<li>11.1 Steps to configur Records Types <li/>\n<li>11.2 Creatingg record tpyes for Standard objects <li/>\n<ul/> ', 1),
(20, 1, '12) Field History Tracking and Activities', '<ul>\n<li>12.1 Steps to configure Field History Tracking <li/>\n<li>12.2 Steps to enable and creating activities <li/>\n<ul/>', 1),
(21, 1, '13) Security in Salesforce', '<ul>\n<li>13.1 Users in Salesforce and enabling Grant Login Access <li/>\n<li>13.2 Profiles and Permission Sets <li/>\n<li>13.3 Role Hierarchy <li/>\n<li>13.4 OWD (Organisation Wide Defaults) <li/>\n<li>13.5 Manual Sharing and Sharing Rule <li/>\n<li>13.6 Purpose of Grant Access using Hierarchies <li/>\n<li>13.7 Purpose of Vie All, Modify All, View All Data and Modify All Data <li/>\n<li>13.8 Apex Managed Sharing <li/>\n<ul/>', 1),
(22, 1, '14) Import Wizard and Data Loader', '<ul>\n<li>14.1 Difference between Import Wizard and Data Loader<li/>\n<li>14.2 Generating Security Token and Maintaining IP range using Trusted IP <li/>\n<li>14.3 Data Loader Settings <li/>\n<li>14.4 Data Loader Operations <li/>\n<li>14.5 Purpose of External Id <li/>\n<li>14.6 Purpose of Data Export <li/>\n<ul/>', 1),
(23, 1, '15) Workflow Rules', '<ul>\n<li>15.1 Difference between evaluation criteria <li/>\n<li>15.2 Difference between rule criteria <li/>\n<li>15.3 Types of Workflow Actions <li/>\n<li>15.4 Re-evaluation creitera for Field Update <li/>\n<li>15.5 Types of Email Temlate <li/>\n<li>15.6 Setting to enable Task Action <li/>\n<li>15.7 Different senarios with Workflow Rules <li/>\n<ul/>', 1),
(24, 1, '16) Approval Process', '<ul>\n<li>16.1 Configuring Approval Process <li/>\n<li>16.2 Different options available with Approval Process <li/>\n<li>16.3 Creating custom hierarchy field <li/>\n<li>16.4 Adding multiple steps to the Approval process <li/>\n<li>16.5 Purpose of Queues and steps to configure the queue <li/>\n<li>16.6 Difference between Queue and Public Group <li/>\n<li>16.7 Working with thw queues <li/>\n<li>16.8 Approving the records from Email <li/>\n<ul/>', 1);

-- --------------------------------------------------------

--
-- Table structure for table `testimonial`
--

CREATE TABLE `testimonial` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `content` text,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `testimonial`
--

INSERT INTO `testimonial` (`id`, `name`, `content`, `status`) VALUES
(1, 'Bhagyashree Mathur', 'fsdddddddddd fsfsf sfd sdf sdfsf sdfs fdf sdf\ns fds fsdf\nsd fsf sdf\nsfdfsf\ndfsf', 0),
(2, 'Bhagyashree Mathur', 'fsdddddddddd fsfsf sfd sdf sdfsf sdfs fdf sdf\ns fds fsdf\nsd fsf sdf\nsfdfsf\ndfsf', 0),
(3, 'Bhagyashree Mathur', 'fsdddddddddd fsfsf sfd sdf sdfsf sdfs fdf sdf\ns fds fsdf\nsd fsf sdf\nsfdfsf\ndfsf', 0),
(4, 'Bhagyashree Mathur', 'fsdddddddddd fsfsf sfd sdf sdfsf sdfs fdf sdf\ns fds fsdf\nsd fsf sdf\nsfdfsf\ndfsf', 0),
(5, 'Bhagyashree Mathur', 'fsdddddddddd fsfsf sfd sdf sdfsf sdfs fdf sdf\ns fds fsdf\nsd fsf sdf\nsfdfsf\ndfsf', 0),
(6, 'sddasdaadsa', 'sdad', 0),
(7, 'Aditya Kumar', 'Best Company ever', 1),
(8, 'Amit Awasthi', 'Nubes Elite Technologies has given me an astonishing platform for the overall growth and\ndevelopment. The campus has excellent infrastructure and is very beautiful with a perfect blend of\nnature and student-friendly amenities.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `role`, `status`) VALUES
(1, 'admin@nt.com', 'admin1234', 'admin', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `batch`
--
ALTER TABLE `batch`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `certification`
--
ALTER TABLE `certification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `interview`
--
ALTER TABLE `interview`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `interview_section`
--
ALTER TABLE `interview_section`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `maincourses`
--
ALTER TABLE `maincourses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `syllabus`
--
ALTER TABLE `syllabus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonial`
--
ALTER TABLE `testimonial`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `batch`
--
ALTER TABLE `batch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `certification`
--
ALTER TABLE `certification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `faq`
--
ALTER TABLE `faq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `interview`
--
ALTER TABLE `interview`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `interview_section`
--
ALTER TABLE `interview_section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `maincourses`
--
ALTER TABLE `maincourses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `syllabus`
--
ALTER TABLE `syllabus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `testimonial`
--
ALTER TABLE `testimonial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
