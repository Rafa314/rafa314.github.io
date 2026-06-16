---
title: "Portfólio de Engenharia de Segurança & Projetos"
date: 2026-06-16
hidemeta: true
disableShare: true
---

Bem-vindo à minha vitrine técnica. Aqui estão consolidadas as principais ferramentas, automações e pesquisas de segurança que desenvolvi para laboratórios, desafios de CTF e cenários reais de avaliação de segurança corporativa.

---

## 💀 1. PTES Organized Scripts (Automação Ofensiva)
* **Status:** `Em Desenvolvimento Contínuo`
* **Linguagens:** Python, Bash, C, PowerShell
* **Link do Repositório:** [GitHub - Scripts-Pentest](https://github.com/Rafa314/Scripts-Pentest)

Uma suíte completa de ferramentas nativas e scripts customizados projetada estritamente sob as diretrizes do padrão internacional **PTES (Penetration Testing Execution Standard)**. O objetivo deste projeto é otimizar as fases de intrusão, eliminando tarefas repetitivas e garantindo precisão na coleta de evidências.

### 🗂️ Arquitetura do Projeto (Baseado no PTES):
1. **Intelligence Gathering:** Scripts focados em enumeração de banners, varredura de portas e descoberta de ativos ativos em sub-redes.
2. **Threat Modeling:** Mapeamento de superfícies de ataque baseado nos dados coletados.
3. **Vulnerability Analysis:** Ferramentas de análise heurística para identificar falhas lógicas e configurações incorretas.
4. **Exploitation:** Automação de exploits conhecidos e injeções personalizadas.
5. **Post-Exploitation:** Módulos para persistência segura, coleta de hashes locais e pivoteamento de rede.

### 🛠️ Destaque de Código: `parsing.sh` (Módulo de Reconhecimento)
Este script em bash demonstra o uso de wget, grep, for, entre outros para otimizar a coleta de links de um site
para reconhecimento passivo. 

```bash
#!/bin/bash
red='\033[0;31m'
blue='\033[0;34m'
green='\033[0;32m'
clear='\033[0m'

if [ "$1" == "" ]
then 
	echo -e "${green}<==============PARSING HTML===============>"
	echo -e "<=========Por==Rafael=Reis================>"
	echo -e "<==========================================>${clear}"
	echo -e "${blue}Modo de uso: "$0" www.site.com${clear}"
else
rm index.html lista
echo -e "${green}<==============PARSING HTML===============>"
echo -e "<=========Por==Rafael=Reis================>"
echo -e "<==========================================>${clear}"

echo -e "${red}[ + ] Procurando indexações no site "$1"... ${clear}"
$(wget $1) 2> /dev/null;
cat index.html | grep "href" | cut -d "/" -f 3 | grep "\." | cut -d '"' -f 1 | grep -v "<l" >lista;
cat lista
echo -e "${red}[ + ] Resolvendo os hosts do site  "$1"... ${clear}"
for url in $(cat lista);
do host $url | grep "has address"; 
done
fi
echo -e "${green}<==============  FINALIZADO  ===============>"
