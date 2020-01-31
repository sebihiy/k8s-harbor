(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{215:function(t,s,a){t.exports=a.p+"assets/img/harbor_ldap_auth_configuration.c095a145.png"},216:function(t,s,a){t.exports=a.p+"assets/img/harbor_standard_user_view.a731b397.png"},217:function(t,s,a){t.exports=a.p+"assets/img/harbor_admin_view.ad001b0d.png"},247:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"initial-harbor-tasks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#initial-harbor-tasks"}},[t._v("#")]),t._v(" Initial Harbor tasks")]),t._v(" "),e("p",[t._v("YouTube video: "),e("a",{attrs:{href:"https://youtu.be/DcArQEFgk5s",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://youtu.be/DcArQEFgk5s"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Let's do some initial Harbor configuration on second Harbor instance:\n"),e("a",{attrs:{href:"https://harbor.mylabs.dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://harbor.mylabs.dev"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v('If you are using Let\'s Encrypt "staging" you need to download and use their\n"Fake LE Root X1" certificate for curl, helm and k8s cluster:')]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" -d tmp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" tmp\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" tmp\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${LETSENCRYPT_ENVIRONMENT}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"staging"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -pv /etc/docker/certs.d/harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/\n  "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CA_CERT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("kubectl get secrets ingress-cert-staging -n cert-manager -o "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("jsonpath")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{.data.ca\\.crt}"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CA_CERT}")]),t._v('"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<nil>"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CA_CERT}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64 -d "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ca.crt\n  "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" -s ca.crt "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -q https://letsencrypt.org/certs/fakelerootx1.pem -O ca.crt\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" ca.crt /etc/docker/certs.d/harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/ca.crt\n  "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SSL_CERT_FILE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PWD")]),t._v("/ca.crt\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[t._v("EXTERNAL_IP")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("kubectl get nodes --output"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("jsonpath"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{.items[*].status.addresses[?(@.type=='),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("ExternalIP"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(')].address}"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" -q -o "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("StrictHostKeyChecking")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("no -l ec2-user "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${EXTERNAL_IP}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sudo mkdir -p /etc/docker/certs.d/harbor.'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/ && sudo wget -q https://letsencrypt.org/certs/fakelerootx1.pem -O /etc/docker/certs.d/harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v('/ca.crt"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*** Done"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code")])]),e("h2",{attrs:{id:"ldap-authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ldap-authentication"}},[t._v("#")]),t._v(" LDAP Authentication")]),t._v(" "),e("p",[t._v("List users which are in Active Directory:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("ldapsearch -LLL -x -h winad01."),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v(" -D "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("cn")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ansible,cn"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Users,dc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mylabs,dc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dev -w ansible_secret_password -b "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("cn")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("users,dc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mylabs,dc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dev -s sub "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(cn=aduser*)"')]),t._v(" dn name description memberOf\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("dn: CN=aduser01,CN=Users,DC=mylabs,DC=dev\ndescription: User 01 - Group 01\nmemberOf: CN=adgroup01,CN=Users,DC=mylabs,DC=dev\nname: aduser01\n\ndn: CN=aduser02,CN=Users,DC=mylabs,DC=dev\ndescription: User 02 - Group 01\nmemberOf: CN=adgroup01,CN=Users,DC=mylabs,DC=dev\nname: aduser02\n\ndn: CN=aduser03,CN=Users,DC=mylabs,DC=dev\ndescription: User 03 - Group 02\nmemberOf: CN=adgroup02,CN=Users,DC=mylabs,DC=dev\nname: aduser03\n\ndn: CN=aduser04,CN=Users,DC=mylabs,DC=dev\ndescription: User 04 - Group 02\nmemberOf: CN=adgroup02,CN=Users,DC=mylabs,DC=dev\nname: aduser04\n\ndn: CN=aduser05,CN=Users,DC=mylabs,DC=dev\ndescription: User 05 - Group 03\nmemberOf: CN=adgroup03,CN=Users,DC=mylabs,DC=dev\nname: aduser05\n\ndn: CN=aduser06,CN=Users,DC=mylabs,DC=dev\ndescription: User 06 - Group 03\nmemberOf: CN=adgroup03,CN=Users,DC=mylabs,DC=dev\nname: aduser06\n")])])]),e("p",[t._v("List groups which are in Active Directory:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("ldapsearch -LLL -x -h winad01."),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v(" -D "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("cn")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ansible,cn"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Users,dc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mylabs,dc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dev -w ansible_secret_password -b "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("cn")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("users,dc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mylabs,dc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dev -s sub "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(cn=adgroup*)"')]),t._v(" dn name description member\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("dn: CN=adgroup01,CN=Users,DC=mylabs,DC=dev\ndescription: AD User Group  01\nmember: CN=aduser02,CN=Users,DC=mylabs,DC=dev\nmember: CN=aduser01,CN=Users,DC=mylabs,DC=dev\nname: adgroup01\n\ndn: CN=adgroup02,CN=Users,DC=mylabs,DC=dev\ndescription: AD User Group  02\nmember: CN=aduser04,CN=Users,DC=mylabs,DC=dev\nmember: CN=aduser03,CN=Users,DC=mylabs,DC=dev\nname: adgroup02\n\ndn: CN=adgroup03,CN=Users,DC=mylabs,DC=dev\ndescription: AD User Group  03\nmember: CN=aduser06,CN=Users,DC=mylabs,DC=dev\nmember: CN=aduser05,CN=Users,DC=mylabs,DC=dev\nname: adgroup03\n")])])]),e("p",[t._v("Configure LDAP/Active Directory authentication in Harbor by going to\n"),e("code",[t._v("Administration")]),t._v(" -> "),e("code",[t._v("Configuration")]),t._v(" -> "),e("code",[t._v("Authentication")]),t._v(":")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Auth Mode: LDAP")])]),t._v(" "),e("li",[e("code",[t._v("LDAP URL: ldap://winad01.mylabs.dev")])]),t._v(" "),e("li",[e("code",[t._v("LDAP Search DN: cn=ansible,cn=Users,dc=mylabs,dc=dev")])]),t._v(" "),e("li",[e("code",[t._v("LDAP Search Password: ansible_secret_password")])]),t._v(" "),e("li",[e("code",[t._v("LDAP Base DN: cn=users,dc=mylabs,dc=dev")])]),t._v(" "),e("li",[e("code",[t._v("LDAP UID: sAMAccountName")])]),t._v(" "),e("li",[e("code",[t._v("LDAP Scope: OneLevel")])]),t._v(" "),e("li",[e("code",[t._v("LDAP Group Base DN: cn=users,dc=mylabs,dc=dev")])]),t._v(" "),e("li",[e("code",[t._v("LDAP Group GID: sAMAccountName")])]),t._v(" "),e("li",[e("code",[t._v("LDAP Group Admin DN: cn=adgroup03,cn=users,dc=mylabs,dc=dev")])]),t._v(" "),e("li",[e("code",[t._v("LDAP Group Scope: OneLevel")])])]),t._v(" "),e("p",[t._v("It's possible to use API call as well:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -u "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin:admin"')]),t._v(" -X PUT "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://harbor.'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v('/api/configurations"')]),t._v(" -H "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" -d "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n  '),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("auth_mode"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("ldap_auth"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("ldap_base_dn"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("cn=users,dc=mylabs,dc=dev"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("ldap_filter"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("(objectClass=organizationalPerson)"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("ldap_group_admin_dn"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("cn=adgroup03,cn=users,dc=mylabs,dc=dev"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("ldap_group_attribute_name"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("sAMAccountName"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("ldap_group_base_dn"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("cn=users,dc=mylabs,dc=dev"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("ldap_group_search_filter"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("(objectClass=group)"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("ldap_group_search_scope"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 1,\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("ldap_scope"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 1,\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("ldap_search_dn"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("cn=ansible,cn=Users,dc=mylabs,dc=dev"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("ldap_search_password"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("ansible_secret_password"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("ldap_uid"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("sAMAccountName"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("ldap_url"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("ldap://winad01."),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("token_expiration"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(': 300\n}"')]),t._v("\n")])])]),e("p",[e("img",{attrs:{src:a(215),alt:"Harbor Authentication Configuration page",title:"Harbor Authentication Configuration page"}})]),t._v(" "),e("p",[t._v("Open a new tab with Harbor login page\n("),e("a",{attrs:{href:"https://harbor.mylabs.dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://harbor.mylabs.dev"),e("OutboundLink")],1),t._v(") and login as:")]),t._v(" "),e("ul",[e("li",[t._v("User: "),e("code",[t._v("aduser01")])]),t._v(" "),e("li",[t._v("Password: "),e("code",[t._v("admin")])])]),t._v(" "),e("p",[t._v("You should see limited view on the right side containing only "),e("code",[t._v("Projects")]),t._v("\nand "),e("code",[t._v("Logs")]),t._v(":")]),t._v(" "),e("p",[e("img",{attrs:{src:a(216),alt:"Harbor - Standard user view",title:"Harbor - Standard user view"}})]),t._v(" "),e("p",[t._v("Open a new tab with Harbor login page\n("),e("a",{attrs:{href:"https://harbor.mylabs.dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://harbor.mylabs.dev"),e("OutboundLink")],1),t._v(") and login as:")]),t._v(" "),e("ul",[e("li",[t._v("User: "),e("code",[t._v("aduser06")]),t._v(" and "),e("code",[t._v("aduser05")])]),t._v(" "),e("li",[t._v("Password: "),e("code",[t._v("admin")])])]),t._v(" "),e("p",[t._v("This user belongs to group "),e("code",[t._v("adgroup03")]),t._v(" which is group containing Harbor\nAdministrators. You should be able to see much more details in Harbor now\nand also Users table has some details:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(217),alt:"Harbor - Admin view",title:"Harbor - Admin view"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);