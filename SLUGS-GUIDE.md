# 📋 Guia de Slugs - Sistema de URLs Dinâmicas

## 🎯 Como Funciona

Este projeto possui um sistema de **slugs dinâmicos** que altera automaticamente o link do botão "Conocer" baseado na URL acessada.

### 🔗 Estrutura de Links

**Base URL do botão:**
```
https://go.aff.24gamespartners.com/ex9wjlb9?utm_campaign=Gads_{SLUG}
```

Onde `{SLUG}` é detectado automaticamente do caminho da URL.

---

## 📁 Slugs Criados

### 1️⃣ **axt25**
- **URL da página:** `dominio.com/axt25/`
- **Link do botão:** `https://go.aff.24gamespartners.com/ex9wjlb9?utm_campaign=Gads_axt25`

### 2️⃣ **axt26**
- **URL da página:** `dominio.com/axt26/`
- **Link do botão:** `https://go.aff.24gamespartners.com/ex9wjlb9?utm_campaign=Gads_axt26`

### 🏠 **Página raiz** (opcional)
- **URL da página:** `dominio.com/`
- **Link do botão:** `https://go.aff.24gamespartners.com/ex9wjlb9?utm_campaign=Gads_default`

---

## ⚙️ Como o JavaScript Funciona

O arquivo `script.js` contém uma função que:

1. **Detecta automaticamente o slug** da URL atual
2. **Extrai o nome da pasta** (axt25, axt26, etc.)
3. **Atualiza o href do botão** com o slug correspondente

```javascript
function updateButtonLink() {
    const pathname = window.location.pathname;
    const slug = pathname.split('/').filter(Boolean).pop() || '';
    const campaign = slug || 'Gads_default';
    const finalURL = `https://go.aff.24gamespartners.com/ex9wjlb9?utm_campaign=Gads_${campaign}`;
    btnConocer.href = finalURL;
}
```

---

## ➕ Como Criar Novos Slugs

### Método 1: Copiar pasta existente

1. Duplique a pasta `axt25/` ou `axt26/`
2. Renomeie para o novo slug (ex: `axt27/`)
3. **Pronto!** O JavaScript detectará automaticamente

### Método 2: Criar manualmente

1. Crie uma nova pasta na raiz (ex: `axt27/`)
2. Copie o `index.html` de qualquer slug existente
3. **Importante:** Mantenha os caminhos relativos (`../assets/`, `../styles.css`, `../script.js`)

**Exemplo de estrutura:**
```
embajadores/
├── axt25/
│   └── index.html  (caminhos: ../assets/, ../styles.css, ../script.js)
├── axt26/
│   └── index.html  (caminhos: ../assets/, ../styles.css, ../script.js)
├── axt27/          ← Nova pasta
│   └── index.html  (caminhos: ../assets/, ../styles.css, ../script.js)
├── assets/
├── styles.css
└── script.js
```

---

## 🧪 Como Testar

### Teste Local (Navegador)

1. Abra `embajadores/axt25/index.html` no navegador
2. Abra o **Console** (F12)
3. Procure por:
   ```
   Slug detected: axt25
   Button URL: https://go.aff.24gamespartners.com/ex9wjlb9?utm_campaign=Gads_axt25
   ```
4. Clique com botão direito no botão "Conocer" → "Inspecionar"
5. Verifique o atributo `href`

### Teste no Servidor (Hostgator)

1. Acesse: `https://seudominio.com/axt25/`
2. Clique no botão "Conocer"
3. Verifique se redireciona para o link correto com `Gads_axt25`

---

## 📊 Tracking de Campanhas

Cada slug gera uma campanha UTM diferente:

| Slug | Campanha UTM | Uso Recomendado |
|------|--------------|-----------------|
| axt25 | `Gads_axt25` | Google Ads - Campanha A |
| axt26 | `Gads_axt26` | Google Ads - Campanha B |
| axt27 | `Gads_axt27` | Google Ads - Campanha C |
| ... | `Gads_...` | ... |

Isso permite rastrear de onde vêm os cliques em cada campanha do Google Ads.

---

## 🚀 Deploy no HostGator

### Upload Completo

1. Suba toda a pasta `embajadores/` para `public_html/`
2. Estrutura no servidor:
   ```
   public_html/
   ├── embajadores/
   │   ├── axt25/
   │   ├── axt26/
   │   ├── assets/
   │   ├── index.html
   │   ├── styles.css
   │   └── script.js
   ```

### Acessar os Slugs

- `https://seudominio.com/embajadores/axt25/`
- `https://seudominio.com/embajadores/axt26/`

---

## 🔧 Personalizações Avançadas

### Mudar o Link Base

Edite em `script.js` (linha ~22):

```javascript
const baseURL = 'https://go.aff.24gamespartners.com/ex9wjlb9';
```

### Mudar o Prefixo da Campanha

Edite em `script.js` (linha ~26):

```javascript
const campaign = slug || 'Gads_default';  // Altere 'Gads_' para outro prefixo
```

### Adicionar Mais Parâmetros UTM

```javascript
const finalURL = `${baseURL}?utm_campaign=Gads_${campaign}&utm_source=google&utm_medium=cpc`;
```

---

## ⚠️ Importante

✅ **Sempre use caminhos relativos** nas pastas de slugs:
- ✅ `../assets/imagem.png`
- ✅ `../styles.css`
- ✅ `../script.js`

❌ **Nunca use caminhos absolutos:**
- ❌ `/assets/imagem.png`
- ❌ `assets/imagem.png`

---

## 🐛 Debug

Se o botão não estiver funcionando:

1. Abra o Console do navegador (F12)
2. Procure por erros JavaScript
3. Verifique se o console mostra:
   - `Slug detected: [seu-slug]`
   - `Button URL: [url-completa]`

4. Se não aparecer, verifique:
   - O caminho do `script.js` está correto? (`../script.js`)
   - O botão tem a classe `.btn-conocer`?

---

## 📞 Suporte

Para criar mais slugs ou customizar o sistema, edite:
- `script.js` - Lógica de detecção de slugs
- Crie novas pastas seguindo o padrão das existentes

**Sistema criado para flexibilidade:** Adicione quantos slugs quiser sem modificar código! 🚀

