(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{251:function(a,e,s){"use strict";s.r(e);var t=s(0),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"clean-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clean-up"}},[a._v("#")]),a._v(" Clean-up")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/aws-samples/eks-workshop/65b766c494a5b4f5420b2912d8373c4957163541/static/images/cleanup.svg?sanitize=true",alt:"Clean-up",title:"Clean-up"}})]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("Configure "),s("code",[a._v("kubeconfig")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MY_DOMAIN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"mylabs.dev"')]),a._v("\neksctl utils write-kubeconfig --kubeconfig kubeconfig.conf --name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("USER")]),a._v("}")]),a._v("-k8s-harbor\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("KUBECONFIG")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${KUBECONFIG"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":-")]),a._v("$PWD"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("kubeconfig.conf}")]),a._v("\n")])])]),s("p",[a._v("Remove Windows Server 2016 CloudFormation stack:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("aws cloudformation delete-stack --stack-name eksctl-"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("USER")]),a._v("}")]),a._v("-k8s-harbor-cluster-windows-server-2016\n")])])]),s("p",[a._v("Remove Gitea:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm delete --purge gitea\nkubectl delete namespace gitea-system --wait"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n")])])]),s("p",[a._v("Remove Harbor:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm delete --purge harbor\nkubectl delete namespace harbor-system --wait"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n")])])]),s("p",[a._v("Remove kubed:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm delete --purge kubed\n")])])]),s("p",[a._v("Remove cert-manager:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm delete --purge cert-manager\nkubectl delete -f https://raw.githubusercontent.com/jetstack/cert-manager/release-0.10/deploy/manifests/00-crds.yaml --wait"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\nkubectl delete namespace cert-manager --wait"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n")])])]),s("p",[a._v("Remove Nginx-ingress:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm delete --purge nginx-ingress\nkubectl delete namespace nginx-ingress-system --wait"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\nkubectl delete namespace mytest --wait"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n")])])]),s("p",[a._v("Cleanup + Remove Helm:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm repo remove harbor jetstack appscode library\nhelm reset --remove-helm-home\nkubectl delete serviceaccount tiller --namespace kube-system --wait"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\nkubectl delete clusterrolebinding tiller-cluster-rule --wait"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Deleting /home/pruzicka/.helm\nTiller (the Helm server-side component) has been uninstalled from your Kubernetes Cluster.\n")])])]),s("p",[a._v("Remove EKS cluster:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("eksctl delete cluster --name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("USER")]),a._v("}")]),a._v("-k8s-harbor\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('[ℹ]  using region eu-central-1\n[ℹ]  deleting EKS cluster "pruzicka-k8s-harbor"\n[✔]  kubeconfig has been updated\n[ℹ]  2 sequential tasks: { delete nodegroup "ng-d1b535b2", delete cluster control plane "pruzicka-k8s-harbor" [async] }\n[ℹ]  will delete stack "eksctl-pruzicka-k8s-harbor-nodegroup-ng-d1b535b2"\n[ℹ]  waiting for stack "eksctl-pruzicka-k8s-harbor-nodegroup-ng-d1b535b2" to get deleted\n[ℹ]  will delete stack "eksctl-pruzicka-k8s-harbor-cluster"\n[✔]  all cluster resources were deleted\n')])])]),s("p",[a._v("Clean Policy, User, Access Key in AWS:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# aws route53 delete-hosted-zone --id $(aws route53 list-hosted-zones --query "HostedZones[?Name==\\`${MY_DOMAIN}.\\`].Id" --output text)')]),a._v("\naws iam detach-user-policy --user-name "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("USER")]),a._v("}")]),a._v('-eks-cert-manager-route53"')]),a._v(" --policy-arn "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("aws iam list-policies --query "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Policies[?PolicyName==\\'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("USER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("-AmazonRoute53Domains-cert-manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v('].{ARN:Arn}"')]),a._v(" --output text"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\naws iam delete-policy --policy-arn "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("aws iam list-policies --query "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Policies[?PolicyName==\\'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("USER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("-AmazonRoute53Domains-cert-manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v('].{ARN:Arn}"')]),a._v(" --output text"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\naws iam delete-access-key --user-name "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("USER")]),a._v("}")]),a._v("-eks-cert-manager-route53 --access-key-id "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("aws iam list-access-keys --user-name $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("USER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("-eks-cert-manager-route53 --query "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"AccessKeyMetadata[].AccessKeyId"')]),a._v(" --output text"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\naws iam delete-user --user-name "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("USER")]),a._v("}")]),a._v("-eks-cert-manager-route53\n")])])]),s("p",[a._v("Docker clean-up:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" -d ~/.docker/ "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf ~/.docker/\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DOCKER_CONTAINERS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" -a -q"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" -n "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${DOCKER_CONTAINERS}")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" docker stop "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${DOCKER_CONTAINERS}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" docker "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${DOCKER_CONTAINERS}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DOCKER_IMAGES")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker images -q"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" -n "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${DOCKER_IMAGES}")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" docker rmi --force "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${DOCKER_IMAGES}")]),a._v("\n")])])]),s("p",[a._v("Notary clean-up:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" -d ~/.notary/ "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf ~/.notary/\n")])])]),s("p",[a._v("Docker certificate cleanup if exists:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf /etc/docker/certs.d/harbor."),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MY_DOMAIN}")]),a._v("\n")])])]),s("p",[a._v("Remove "),s("code",[a._v("tmp")]),a._v(" directory:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf tmp\n")])])]),s("p",[a._v("Remove other files:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" demo-magic.sh kubeconfig.conf README.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&>")]),a._v(" /dev/null\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);